import {  MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon,MDBBtn} from "mdb-react-ui-kit"
const MyFooter = () => {
    return(
        <MDBFooter className='bg-dark text-center text-white'>  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            Virginia Bareweng
          </a>
        </div>
      </MDBFooter>
    );
}
export default MyFooter