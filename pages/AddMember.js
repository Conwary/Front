import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch('https://bed7-2405-9800-b910-701c-7422-d1b-74bf-8d55.ngrok-free.app/api/users');
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

      fetch(`https://bed7-2405-9800-b910-701c-7422-d1b-74bf-8d55.ngrok-free.app/api/users`, {
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
        console.error('Error:', error);import jwt from "jsonwebtoken";
// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});
 

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  if (req.method === 'POST') {
    const { username, password } = req.body;

    connection.connect(async (error) => {
      if (error) {
        console.error('Error connecting to database:', error.message);
        return res.status(500).json({ message: 'Failed to connect to database' });
      }

      const sql = 'SELECT * FROM tbl_users WHERE username = ? AND password = ?';
     
      try {
        const results = await new Promise((resolve, reject) => {
          connection.query(sql, [username, password], (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });

        if (results.length > 0) {
          console.log("Hello")
          return res.status(200).json({ status: 'ok', message: 'Login successful', user: results });
        } else {
          console.log("Please keep login")
          return res.status(401).json({ message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error('Error retrieving user:', error.message);
        return res.status(500).json({ message: 'Failed to retrieve user' });
      } finally {
        connection.end();
      }
    });
  }
}
      });

  }; //end handleSubmit
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {session.user.fname} {session.user.lname} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="txt_studentid" id="txt_studentid" className="form-control"style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Student ID" required />
          <input type="text" name="txt_firstname" id="txt_firstname" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="First Name" required />
          <input type="text" name="txt_lastname" id="txt_lastname" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Last Name" required />
          <input type="text" name="txt_username" id="txt_username" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Username"  required />
          <input type="text" name="txt_password" id="txt_password" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Password" required />
          <input type="text" name="txt_status" id="txt_status" className="form-control" style={{ margin: '0.5rem', fontSize: '1.2rem' }} placeholder="Status" required />
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
