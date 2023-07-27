import "./FirstSection.css"

const FirstSection = () => {
  return (
    <div className="first-section-container">
      <div className="first-max-width">
        <div className="row py-4 mx-4">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className=" ">
              <div className="text-medium-1">Lorem ipsum dolor sit amet.</div>
              <div className="title">We Are Consulting For Your Bussiness Finances</div>
              <div className="description my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint beatae amet reiciendis. Corrupti rem, ab facere eligendi hic voluptates!</div>
              <div><button className="button py-1 px-2">Start now</button></div>
            </div>
          </div>
          <div className="col-lg-6 image-container">
            <img width={700} className="img-fluid" src="https://i.ibb.co/hDLJ10t/24372253-6876640.jpg" alt="24372253-6876640" border="0" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection

