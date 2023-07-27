import "./SecondSection.css"
// import { FaHardDrive } from 'react-icons/fa';
import { IoHardwareChip } from 'react-icons/io5';
const SecondSection = () => {
  return (
    <div className="first-section-container2 mt-5">
      <div className="first-max-width">
        <div className="row py-4 mx-4">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="  ">

              <div className="title2">We have many year Experience in Counsultent business </div>
              <div className="description2 my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque iste totam fugit? Iste, quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae amet reiciendis. Corrupti rem, ab facere eligendi hic voluptates!</div>
              <div><button className="button2 py-1 px-2">Know more</button></div>
            </div>
          </div>
          <div className="col-lg-6 image-container d-flex justify-content-center">
            <img width={400} className="img-fluid" src="https://i.ibb.co/4RRBD7k/16736634-16736634.jpg" alt="24372253-6876640" border="0" />
          </div>
        </div>
        <div className="my-4 logo-and-text d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span><IoHardwareChip className="logo-2" /></span>
            <span>Random </span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span><IoHardwareChip className="logo-2" /></span>
            <span>Random </span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span><IoHardwareChip className="logo-2" /></span>
            <span>Random </span>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span><IoHardwareChip className="logo-2" /></span>
            <span>Random </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SecondSection

