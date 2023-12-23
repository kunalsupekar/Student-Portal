import React from 'react'
import { Link} from 'react-router-dom';
//import { Container, Row, Col, Card } from 'react-bootstrap';

export default function HeroSection() {
//   const CustomCard = ({ title, image, description }) => (
//   <Col sm={6} md={4} lg={3} className="mb-4">
//     <Card className="card-hover" style={{ width: '14rem' }}>
//       <img src={image} className="card-img-top" alt="nature" />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href=" " className="btn btn-primary">Learn More</a>
//       </div>
//     </Card>
//   </Col>
// );

  
  return (
    <>
   
   <div >
    <div style={{marginTop: '100px'  }}></div>
<div className="card"  style={{ width: '800px', height: '320px', position: 'relative', left: '30px',top:'-5px' ,marginbottom: '40px' }}>
  <h2 className="card-header">*********</h2>
  <div className="card-body">
    <h5 className="card-title">Welcome to Our Banking System</h5>
    <p>
        We provide secure and reliable banking services to help you manage your finances with ease.
      </p>
      <p>
        Whether you want to view your accounts, make transactions, or access our range of banking services,
        we have you covered.
      </p>
      <p>
        Get started today and experience banking at its best!
      </p>       
      <Link to="/Add">
  <button className="btn btn-lg btn-primary">
    Create an Account &raquo;
  </button>
   </Link>
  </div>
</div>
</div>


<div style={{ marginTop: '30px' , marginRight: '20px'}}></div>

{/* <>
<div className="card-section">
    <Container>
      <h2 className="text-center">We Provides </h2>
      <Row className="justify-content-center mb-4">
        <CustomCard
          title="GOLD LOAN"
          image="https://bankofindia.co.in/documents/20121/8018389/Gold+Loan.png/947bba87-c5e0-4d02-6b00-9246c0fb3e28?t=1675432298479"
          description="Get instant gold loan online at our with lowest interest rate.Finance your jewelry in an easy and secure way."
        />
        <CustomCard
          title="JAI JAWAN PLUS"
          image="https://bankofindia.co.in/documents/20121/8018389/Jay+Jawan+.png/f9dd3eb3-32ca-64d7-0425-efeb33cdb5f3?t=1675432304964"
          description="All permanent employees of Defense Forces i.e. Indian Army, Indian Air Force, Indian Navy and Coast Guards."
        />
        
       
        <CustomCard
          title="Home Loan"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RPLqC8z5ZLwLk5jD8qDv3KXZ50KFLMTlmA&usqp=CAU"
          description="Get quick and easy home loans from Nidhi Bank at an attractive interest rate with minimal documentation."
        />
        <CustomCard
          title="Credit card"
          image="https://www.forbes.com/advisor/wp-content/uploads/2020/05/gettyimages-1154092756-612x612-1-e1594154650521.jpg"
          description="Apply Credit Cards Online.Convenient,handy and useful Credit Cards give you the freedom to make payments."
        />
      </Row>
      <Row className="justify-content-center mb-4">
        

<CustomCard
          title=" Instant Loans"
          image="https://i0.wp.com/hindisutra.com/wp-content/uploads/2020/07/types-of-bank-loan-in-hindi-bank-loan-types-in-hindi.jpg?fit=640%2C350&ssl=1"
          description="Nidhi Bank offers various loans like personal loan, home loan, vehicle loan & many more with lowest interest rates."
        />
        <CustomCard
          title="Fixed Deposit"
          image="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/07/fixed-deposit-1627642644.jpg"
          description="Get high returns on your savings with Nidhi FIRST Bank's FD account. Open an FD account today & enjoy benefits."
        />
        <CustomCard
          title="ASSET BACKED LOAN"
          image="https://bankofindia.co.in/documents/20121/397030/iStock-1027564452.jpg/f366ce52-a48a-89ee-5b21-36a2fa763f9e?t=1675739597675"
          description="To provide working capital for building up of current assets,plant & machinery needed for business purpose. "
        />
        <CustomCard
          title="Invest and Insurance"
          image="https://www.financialexpress.com/wp-content/uploads/2021/11/Insurance-9-1-620x400-1.jpg"
          description="Nidhi Bank's team of professionals will help you choose the right investment and insurance solutions for you ."
        />
      </Row>
    </Container>
  </div>


</> */}
    </>

  )
}