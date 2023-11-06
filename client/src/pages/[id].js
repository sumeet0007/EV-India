// pages/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function DynamicBrandDetails() {

    const [brandDetails, setBrandDetails] = useState({});
    const router = useRouter();
    const { id } = router.query;

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

    const dealersData = [
        {
            Name : "New Old Dealers",
            mobile : "0011223355",
            email : "newola@contact.com",
            Address : "Mumbai",
            logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
            bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
            id:"1"
        },
        {
            Name : "New Old Dealers",
            mobile : "0011223355",
            email : "newola@contact.com",
            Address : "Mumbai",
            logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
            bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
            id:"2"
        },
        {
            Name : "New Old Dealers",
            mobile : "0011223355",
            email : "newola@contact.com",
            Address : "Mumbai",
            logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
            bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
            id:"3"
        },
        {
            Name : "New Old Dealers",
            mobile : "0011223355",
            email : "newola@contact.com",
            Address : "Mumbai",
            logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
            bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
            id:"4"
        },
        {
            Name : "New Old Dealers",
            mobile : "0011223355",
            email : "newola@contact.com",
            Address : "Mumbai",
            logoImg : "https://www.marketinginasia.com/wp-content/uploads/2023/05/ola-electric.webp",
            bannerImg : "https://evindia.online/_next/image?url=https%3A%2F%2Fev-india-bucket.s3.ap-south-1.amazonaws.com%2Fuploads%2Fcompany%2F2023-02-14-10-02-45-blob&w=1920&q=75",
            id:"5"
        },
    ]

    function filterBrand() {
        if(id){
            const filterBrand = data.filter((brand) => brand.id === id);
            console.log(filterBrand,"filterBrand");
            setBrandDetails(filterBrand)
        }
    }

    useEffect(()=>{
        filterBrand()
    },[id])



  return (
    <>
    <div>
        {brandDetails.length >0 && brandDetails.map((details) =>{
            return (
                <>
                    <div>
                        <div className='bannerConatiner'>
                            <img src={details.bannerImg} alt='banner' className='brandBanner'></img>
                        </div>
                        <div className='mainContainer'>
                            <div className='logoContainer'>
                                <img src={details.logoImg} alt='logo' className='brandLogo'></img>
                            </div>
                            <div className='brandDetailsContainer'>
                                <div>
                                    <p className='brandName'>{details.title}</p>
                                    <p className='brandMobile'>Mobile :{details.mobile}</p>
                                    <p className='brandEmail'>Email : {details.email}</p>
                                    <a href={details.googleMapUrl} className='brandGoogleUrl'>Address</a>              
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )
        })}
    </div>
    <hr></hr>
    <div className='dealerList'>
        <p className='dealerHeadText'>Dealers List</p>
        {dealersData.map((dealer, index) =>{
            return(
                <>
                <div key={index}  className='dealerContainer'>
                    <div className='dealerLogo'>
                        <img src={dealer.logoImg} className='dealerLogo'></img>
                    </div>
                    <div>
                        <strong>{dealer.Name}</strong>
                        <p>{dealer.Address}</p>
                        <p>{dealer.email}</p>
                        <p>{dealer.mobile}</p>
                    </div>
                </div>
                </>
            )
        })}
    </div>
    </>
  );
}

export default DynamicBrandDetails;
