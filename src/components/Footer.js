import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-teal mt-8 text-gray-50 flex flex-col items-center justify-center py-8
    md:flex-row md:mt-4'>
       
        <div className='company w-32 flex flex-col text-center mr-6'>
            <h4 className='text-yellow-500'>QUICK LINKS</h4>
            <ul>
                <li className='my-4'>About Us</li>
                <li className='my-4'>Get Support</li>
                <li className='my-4'>Feedback</li>
                <li className='my-4'>Get Support</li>
            </ul>
        </div>
        <div className='product-license w-32 flex flex-col text-center mr-6'>
            <h4 className='text-yellow-500'>COMPANY</h4>
            <ul>
                <li className='my-4'>Product License</li>
                <li className='my-4'>Our Terms</li>
                <li className='my-4'>Privacy Policy</li>
                 <li className='my-4'>Product License</li>
            </ul>
        </div>
         <div className='socials w-32 flex flex-col text-center mr-6'>
             <h4 className='text-yellow-500'>OUR SOCIALS</h4>
            <ul className='w-full flex justify-between md:flex-col'>
                <li><i class="fa fa-facebook w-8 h-8 bg-yellow-500 rounded-circle p-2 mr-2 md:my-2"></i></li>
                <li><i class="fa fa-twitter w-8 h-8 bg-yellow-500 rounded-circle p-2 mr-2 md:my-2"></i></li>
                <li><i class="fa fa-instagram w-8 h-8 bg-yellow-500 rounded-circle p-2 mr-2 md:my-2"></i></li>
                <li><i class="fa fa-pinterest w-8 h-8 bg-yellow-500 rounded-circle p-2 mr-2 md:my-2"></i></li>
            </ul>
         </div>
    </div>
  )
}

export default Footer



// desktop
//  return (
//     <div className='w-full h-full bg-teal mt-8 text-gray-50 flex justify-center py-8'>
       
//         <div className='company w-32 flex flex-col text-center mr-6'>
//             <h4 className='text-yellow-500'>QUICK LINKS</h4>
//             <ul>
//                 <li className='my-4'>About Us</li>
//                 <li className='my-4'>Get Support</li>
//                 <li className='my-4'>Feedback</li>
//                 <li className='my-4'>Get Support</li>
//             </ul>
//         </div>
//         <div className='product-license w-32 flex flex-col text-center mr-6'>
//             <h4 className='text-yellow-500'>COMPANY</h4>
//             <ul>
//                 <li className='my-4'>Product License</li>
//                 <li className='my-4'>Terms & Conditions</li>
//                 <li className='my-4'>Privacy Policy</li>
//                  <li className='my-4'>Product License</li>
//             </ul>
//         </div>
//          <div className='socials w-32 flex flex-col text-center mr-6'>
//              <h4 className='text-yellow-500'>OUR SOCIALS</h4>
//             <ul>
//                 <li><i class="fa fa-facebook w-8 h-8 bg-yellow-500 rounded-circle p-2 my-1"></i></li>
//                 <li><i class="fa fa-twitter w-8 h-8 bg-yellow-500 rounded-circle p-2 my-1"></i></li>
//                 <li><i class="fa fa-instagram w-8 h-8 bg-yellow-500 rounded-circle p-2 my-1"></i></li>
//                 <li><i class="fa fa-pinterest w-8 h-8 bg-yellow-500 rounded-circle p-2 my-1"></i></li>
//             </ul>
//          </div>
//     </div>
//   )