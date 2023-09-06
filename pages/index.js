import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
      <>
<Head>
      <title>MassShop</title>
</Head>

<main className="text-center data-bs-toggle mb-4">
  <div className="row text-dark mt-4">
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/983433055924527135/983553909417185391/caption-1.gif" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">Kindly looking Officer</h2>
        <p>Excuse me sir?</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/424843708396077057/1115841165288280164/jadesus-jadehour.gif" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">😕</h2>
        <p>❓❓</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/622433942766878742/1115628527212044298/IMG_3068.jpg?width=931&height=677" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">WHAT SUPER IDOL DOING 😱😱</h2>
        <p>WHY HE WITH A ISIS TERRORIST🗣🗣</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>

  </main>

    
  <div className="b-example-divider" />
  <div className="container">
    <footer >
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
  );
}
  



