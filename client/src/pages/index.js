import Link from 'next/link'
import React from 'react'

export default function Home() {

  const data = [
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"1"
  },
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"2"
  },
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"3"
  },
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"4"
  },
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"5"
  },
    {
      title : "Ola Electric",
      dec : "India's No 1 EV Two Wheeler Brand | Bengaluru.",
      Address : "India",
      logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
      bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
      googleMapUrl : "https://maps.app.goo.gl/FPgupHbR5eU2jGL66",
      email : "contact@old.com",
      mobile : "083568 53924",
      id:"6"
  },
    ]

  return (
    <div>
        <p className='brandName'>Brands</p>
        <div>
          {data.map((e)=>{
            return(
                <div class="card">
                  <Link href={e.id}>
                    <img src={e.logoImg} alt="Avatar" style={{width:"100%"}} />
                  </Link>
                  <div class="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Architect & Engineer</p> 
                  </div>
                </div>
            )
          })}
        </div>
    </div>
  )
}
