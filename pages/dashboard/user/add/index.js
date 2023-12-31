import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
export async function getServerSideProps() {
  const res = await fetch('https://front-rickconway.vercel.app/api/users');
  const data = await res.json();
  const posts = data.users || []; // กำหนด posts เป็นอาเรย์ว่างหาก data.users เป็น undefined

  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter();
//----------------------start handleSubmit--------------------------
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }

      fetch(`https://front-rickconway.vercel.app/api/users`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }; //end handleSubmit
  if (session) {
    return (
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
        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="txt_studentid" id="txt_studentid" className="form-control"style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Student ID" />
          <input type="text" name="txt_firstname" id="txt_firstname" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="First Name" />
          <input type="text" name="txt_lastname" id="txt_lastname" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Last Name" />
          <input type="text" name="txt_username" id="txt_username" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Username" />
          <input type="text" name="txt_password" id="txt_password" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Password" />
          <input type="text" name="txt_status" id="txt_status" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Status" />
          <button type="submit" style={{ margin: '0.5rem', fontSize: '2.0rem' }}>Add Member</button>
        </div>
        </form>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
