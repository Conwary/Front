import React from'react'
import Head from 'next/head'
import Link from 'next/link';
export default function index() {
  return (
    <>

    <Head>
      <title>MassShop</title>
      <link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
  rel="stylesheet"
/>

</Head>

<main className="text-center data-bs-toggle mb-4">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Conway MassShop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/features">Features</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/about">about</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div className="row text-dark mt-4">
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/424843708396077057/1115877349922193449/220px-George_Floyd.png?width=275&height=340" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">George Floyd</h2>
        <p>The breathless</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/499751079907426314/1018518424638455938/unknown.png?width=677&height=677" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">Jessada Satati</h2>
        <p>เจษฎา สาทะติ</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/499751079907426314/1115877830568464404/3008.png?width=677&height=677" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">Derek Chauvin</h2>
        <p>Master of the knees</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

  </main>

    
  <div className="b-example-divider" />
  <div className="container">
    <footer>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="/features" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">about</a></li>
      </ul>
      <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
    </footer>
  </div>
  <div className="b-example-divider" />



    </>
  )
}



