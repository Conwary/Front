import React from'react'
import Head from 'next/head'
import Link from 'next/link';

export default function index() {
  return (
    <>
    <Head>
      <title>MassShop</title>
</Head>

<main>
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
  <div className="row text-dark mt-4 text-center data-bs-toggle mb-4">
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/622433942766878742/1107304902490869810/attachment-6.gif?width=493&height=480" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">Who wants me?</h2>
        <p>100% Nobody</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/990131116910465024/1115849181916045352/spunchbob-sad.gif?width=622&height=622" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">Crying Spongebob 😢</h2>
        <p>😭😭😭</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
      <div class="col-lg-4">
      <img width="140" height="140" src="https://media.discordapp.net/attachments/424843708396077057/1115876776657305682/jason-luv-thug.gif?width=800&height=635" className="bd-placeholder-img rounded-circle" alt="1" />
        <h2 class="fw-normal">THIS MAN JUST STOLE MY PIZZA 😡😡😡</h2>
        <p>WHY IS HE DOING THIS?🗣🗣</p>
        <p><Link class="btn btn-secondary" href="#">View details &raquo;</Link></p>
      </div>
    </div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://media.discordapp.net/attachments/622433942766878742/1115870293253181602/2aYqS0l4EOhseuUjhGX2YGLDcDOVFARp.png?width=1200&height=675" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">สารพัดวิธีการทำระเบิด</h1>
        <p class="lead">
ระเบิดเจลาติน

ใครทำตามตายขึ้นมาไม่รู้นะเฟร้ย ผู้ทำควรเป็นคนที่ชำนาญมากๆ หรือก็เบื่อชีวิตสุดๆเท่านั้น

ระเบิดอันนี้ต้องเก็บเย็นมากๆครับ อย่าให้เกิน 0 องศา C เด็ดขาดไม่งั้นตู้พัง

สัดส่วนผสม
1. ไนโตรกรีคอล 75% (หาเองเฟ้ย ผสมจาก Antifreeze ได้ แต่ไม่สอน เด๋วคนทำตายก่อน)
2. ดินปืน IMR แบบไร้ควัน 6% (ซื้อจากร้านไฟแช๊คดูป๊อง)
3. โปรแตสเซียมไนเตรท (หาไม่ได้ก็อย่าทำเลย ตายเปล่า)
4. แป้งขนมปัง (งงดิ งงใช่มะ)

ผสมล่ะนะ
1. เอาโปแตสเซียมไนเตรทกับไนโตรกรีคอล ระวังระเบิดล่ะ เพราะไนโตรกรีคอลมันระเบิดง่ายมากๆ ควรใส่ถุงมือตลอดเลยนะ
2. ผสมแป้งมันกับโวเดียมคาร์บอเนต แล้วเอาข้อ 1 ผสมเข้าจนเป็นเนื้อเดียวกันนะ ผสมช้าๆ เบาๆ อย่าให้มือขาดล่ะ
3. ผสม IMR เข้าไปหลังจากสารทั้งคู่เป็นเนื้อเดียวกันแล้ว แล้วผสมต่อให้ IMR เข้าเป็นเนื้อเดียวกันด้วย

เอาไปใช้ให้เร็วที่สุด เพราะมันด้านง่าย ระเบิดเองก็ง่าย ถ้าจะเก็บก็อย่าให้เกิน 10C เด็ดขาด อัตราระเบิดอยู่ที่ 7700 เมตรต่อวิฯ

เตือนอีกที เฉพาะคนที่อยากตายหรือชำนาญมากๆ ค่อยทำ
ผมผสมแล้ว โต๊ะพังไป 1 ตัว กางเกง 4 ตัว

ระเบิดขวด (ไม่ใช้ระเบิดมาทอฟนะ)
สิ่งที่ต้องใช้
1. กรดไฮโดรคลอริค หาได้จากน้ำยาล้างห้องน้ำ ฟุตบาท ลานจอดรถ
2. ขวดน้ำอัดลม (พลาสติก) ขนาด 1 - 3 ลิตร (2 ลิตรดีที่สุด)
3. ตะกั่วแผ่น หาซื้อจากร้านเครื่องใช้ในบ้าน

วิธีทำ
1. ม้วนตะกั่วแผ่นเป็นแท่งยาวๆ แล้วตัดเป็นแท่งเล็กๆ แท่งละ 3 นิ้ว ให้ได้ 7 - 8 แท่ง
2. เทกรดไฮโดรคลอริคลงในขวด (กรุณาใช้กรวยกรอกน้ำ เสียดายน้ำยา) สูง 2 นิ้ว
3. ยัดตะกั่วแผ่นที่ม้วนแล้วลงไป 7 - 8 แท่งต่อขวด
4. เขย่าแรงๆ 1 ทีแล้วโยน
5. หนีดิ อยู่หาสวรรค์วิมาราอาราย (คำเตือน...คำเตือน...คุณมีเวลา 25 วินาทีก่อนการระเบิด)
</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
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



