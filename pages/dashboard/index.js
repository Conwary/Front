import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Link from 'next/link';
export async function getServerSideProps() {
  const res = await fetch('https://bc79-2405-9800-b910-701c-40fa-ba43-8127-1e48.ngrok-free.app/api/users');
  const data = await res.json();
  const posts = data.users || [];

  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleDelete = async (id) => {
    try {
      await fetch('https://bc79-2405-9800-b910-701c-40fa-ba43-8127-1e48.ngrok-free.app/api/users?id=' + id, {
        method: 'DELETE',
      });
      console.log('User deleted successfully');
      handleCloseModal();
      router.reload('/dashboard');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCheck = async (id) => {
    console.log('Edit button clicked with ID:', id);
    // Implement your edit functionality here
  };

  return (
    <>
      {session ? (
        <>
        <header>
          <nav className="navbar fixed-top navbar-expand-lg bg-success">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                Signed in as {session.user.fname} {session.user.lname} <br />
                <span>&nbsp;</span>
                <form className="d-flex" role="search">
                  <button
                    className="btn btn-info"
                    type="submit"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <br /><br /><br />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Student ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Edit/Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>
                    <TableCell>{post.studentid}</TableCell>
                    <TableCell>{post.firstname}</TableCell>
                    <TableCell>{post.lastname}</TableCell>
                    <TableCell>{post.username}</TableCell>
                    <TableCell>{post.password}</TableCell>
                    <TableCell>{post.status}</TableCell>
                    <TableCell>
                    <Link href={`/dashboard/frmEdit?id=${post.id}`}><a className="btn btn-outline-warning">Edit</a></Link>
                      <button className="btn btn-outline-danger" onClick={() => { setDeleteItemId(post.id); handleShowModal(); }}>Delete</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button type="button" variant="danger" onClick={() => handleDelete(deleteItemId)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          <Link href="/AddMember">
            <button className="btn btn-outline-info">AddMember</button>
          </Link>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </>
  );
}
