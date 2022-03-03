import React, { useEffect, useState /*Component*/ } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Buttonplusminus from '../components/Buttonplusminus'
import Navlogin from '../components/NavLogin'
import NumberFormat from 'react-number-format'
// import Fixie from '../assets/images/fixie-white-width.png'
// import FixieS from '../assets/images/fixie-white-width2.png'
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'

export const Vehicledetailpage = (props) => {
  const [vehicle, setVehicle] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    getDataComponent(id)
  })

  useEffect(() => {
    console.log(vehicle)
  })

  const getDataComponent = async (id) => {
    const { data } = await getData(`http://localhost:5000/vehicles/${id}`)
    setVehicle(data.results)
  }

  const goToReservation = (id) => {
    navigate(`/reservation/${id}`)
  }

  return (
    <body>
      <Navlogin />
      <main className="container">
        <section className="back">
          <div className='pt-3'>
            <Link to="/vehicleType">
              <FaChevronLeft />
              <span>Detail</span>
            </Link>
          </div>
        </section>

        <section className="preview">
          <div className="row pt-5 pic">
            <div className="col text-center">
              <img src={vehicle?.image} className="img-fluid detail" alt="Vehicle Detail" />
              <div className='position-relative'>
                <div className='position-absolute top-50 start-0 translate-middle'>
                  <button className="prev"><FaChevronLeft /></button>
                </div>
                <div className="row align-items-center justify-content-center pic-preview">
                  <div className="col text-center">
                    <img src={vehicle?.image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                  </div>
                  <div className="col text-center">
                    <img src={vehicle?.image} className="img-fluid detail1 mb-0" alt="Vehicle Detail" />
                  </div>
                </div>
                <div className='position-absolute top-50 start-100 translate-middle'>
                  <button className="next"><FaChevronRight /></button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="desc">
                <h2>{vehicle?.name}</h2>
                <p className="text-muted">{vehicle?.loc}</p>
              </div>
              <div className="status-vehicle mb-3 d-flex flex-column">
                <span className="text-success fw-bold my-2">Available</span>
                <span className="text-danger mb-3">No prepayment</span>
              </div>
              <div className="info">
                <div className="mb-2">
                  Capacity: {vehicle?.capacity} Person
                </div>
                <div className="mb-2">
                  Type : {vehicle?.categoryName}
                </div>
                <div>
                  Reservation before {vehicle?.reservationBefore}
                </div>
              </div>
              <div className="price mt-4 mb-4 text-end">
                <NumberFormat value={vehicle?.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={"Rp. "} suffix={"/Day"} />
              </div>
              <Buttonplusminus></Buttonplusminus>
            </div>
          </div>
        </section>

        <section className="semi-footer">
          <div className="row mt-4 mb-4">
            <div className="col-sm-5 ">
              <Link to="">
                <button className="button-dark w-100 mb-2">Chat Admin</button>
              </Link>
            </div>
            <div className="col-sm-5 mb-2">
              <button onClick={() => goToReservation(vehicle?.id)} style={{ cursor: 'pointer' }} key={String(vehicle?.id)} className="button-filled w-100">Reservation</button>
            </div>
            <div className="col sm-4">
              <button className="button-like w-100"><FaHeart />
                <span>Like</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  )
}

export default Vehicledetailpage


// export default class Vehicledetailpage extends Component {
//   render() {
//     return (
//       <>
        // <body>
        //   <Navlogin />
        //   <main className="container">
        //     <section className="back">
        //       <div>
        //         <Link to="">
        //           <i className="fa-solid fa-chevron-left"></i>
        //         </Link>
        //         <span>Detail</span>
        //       </div>
        //     </section>

        //     <section className="preview">
        //       <div className="row pt-5">
        //         <div className="col">
        //           <img src={Fixie} alt="Vehicle Detail" />
        //           <div className="row align-items-center justify-content-center">
        //             <div className="col-md-1">
        //               <button className="prev"><FaChevronLeft /></button>
        //             </div>
        //             <div className="col-md-5">
        //               <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
        //             </div>
        //             <div className="col-md-5 text-end">
        //               <img src={FixieS} className="img-fluid" alt="Vehicle Detail" />
        //             </div>
        //             <div className="col-md-1">
        //               <button className="next"><FaChevronRight /></button>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="col">
        //           <div className="desc">
        //             <h2>Fixie-Gray Only</h2>
        //             <p className="text-muted">Yogyakarta</p>
        //           </div>
        //           <div className="status-vehicle mb-3 d-flex flex-column">
        //             <span className="text-success fw-bold my-2">Available</span>
        //             <span className="text-danger mb-3">No prepayment</span>
        //           </div>
        //           <div className="info">
        //             <div className="mb-2">
        //               Capacity: 1 Person
        //             </div>
        //             <div className="mb-2">
        //               Type : Bike
        //             </div>
        //             <div>
        //               Reservation before 2 PM
        //             </div>
        //           </div>
        //           <div className="price mt-4 mb-4 text-end">
        //             Rp.78.000/day
        //           </div>
        //           <div className="day d-flex flex-row justify-content-between align-items-center">
        //             <div className="col">
        //               <button className="plus"><FaPlus /></button>
        //             </div>
        //             <div className="col-md-8">
        //               <div className="count">2</div>
        //             </div>
        //             <div className="col">
        //               <button className="minus"><FaMinus /></button>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </section>

        //     <section className="semi-footer">
        //       <div className="row mt-4">
        //         <div className="col">
        //           <Link to="">
        //             <button className="button-dark">Chat Admin</button>
        //           </Link>
        //         </div>
        //         <div className="col">
        //           <Link to="/reservation">
        //             <button className="button-filled">Reservation</button>
        //           </Link>
        //         </div>
        //         <div className="col mb-4">
        //           <button className="button-like"><i className="fa-solid fa-heart fa-2xl"></i>
        //             <span>Like</span>
        //           </button>
        //         </div>
        //       </div>
        //     </section>
        //   </main>
        //   <Footer />
        // </body>
//       </>
//     )
//   }
// }
