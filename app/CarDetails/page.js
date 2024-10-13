import FAQs from '../component/Faq/Faq'
import Container from '../component/Container/Container'
import DetailImagesSlider from '../component/CarDetails/DetailImagesSlider'
import DetailsRightSidebar from '../component/CarDetails/DetailsRightSidebar'
import ReasonToBuy from '../component/CarDetails/ReasonToBuy'
import CarOverview from '../component/CarDetails/CarOverview'
import InspectionReport from '../component/CarDetails/InspectionReport'
import Benifits from '../component/CarDetails/Benifits'
import CarSpecifications from '../component/CarDetails/CarSpecifications'
import NHeading from '../component/Typography/NHeading'
import CarAddShortCard from '../component/Cards/CarAddShortCard'

const Page = () => {
  let Similar_Cars_Adds = [
    {
      Images: ["https://mda.spinny.com/sp-file-system/public/2024-09-23/a00aa29666d646e0888d0cc1320eb2d3/file.JPG?q=85&w=360"],
      Y_O_Manufacture: "2022",
      Brand_Name: "Skoda",
      Model: "Slavia Style 1.0L TSI MT",
      KM_Driven: "39K",
      Fule_Type: "Petrol",
      Transmission: "Manual",
      Discounted_Price: "12.31",
      Price: "12.22",
      EMI: "22,408",
      T_D_Location: "Gaur City, Noida",
      Body_Type: "Sedan",
      Title: "",
      Car_Name: "",
      Color: "blue",
      Features: ["Sunroof", "Keless Entry", "Airbags"],
    },
    {
      Images: ["https://spn-mda.spinny.com/img/vFzh1msBTAq%2BPtLAZ6_Oug/file.JPG?q=85&w=360", "https://spn-mda.spinny.com/img/rje3MYvbRCecCukqfAahLw/file.JPG?q=85&w=360"],
      Y_O_Manufacture: "2022",
      Brand_Name: "Skoda",
      Model: "Slavia Style 1.0L TSI MT",
      KM_Driven: "39K",
      Fule_Type: "Petrol",
      Transmission: "Manual",
      Discounted_Price: "12.31",
      Price: "12.22",
      EMI: "22,408",
      T_D_Location: "Gaur City, Noida",
      Body_Type: "Sedan",
      Title: "",
      Car_Name: "",
      Color: "blue",
      Features: ["Sunroof", "Keless Entry", "Airbags"],
    },
    {
      Images: ["https://spn-mda.spinny.com/img/ij7K77RiQu%2BZpXLaQNIIfA/file.JPG?q=85&w=360", "https://spn-mda.spinny.com/img/Dwwic8snTNucKWnS9p2U_A/file.JPG?q=85&w=360"],
      Y_O_Manufacture: "2022",
      Brand_Name: "Skoda",
      Model: "Slavia Style 1.0L TSI MT",
      KM_Driven: "39K",
      Fule_Type: "Petrol",
      Transmission: "Manual",
      Discounted_Price: "12.31",
      Price: "12.22",
      EMI: "22,408",
      T_D_Location: "Gaur City, Noida",
      Body_Type: "Sedan",
      Title: "",
      Car_Name: "",
      Color: "blue",
      Features: ["Sunroof", "Keless Entry", "Airbags"],
    },
    {
      Images: ["https://mda.spinny.com/sp-file-system/public/2024-10-09/2dd1ec895cf74b088cff139f5cdadb29/file.JPG?q=85&w=360", ""],
      Y_O_Manufacture: "2022",
      Brand_Name: "Skoda",
      Model: "Slavia Style 1.0L TSI MT",
      KM_Driven: "39K",
      Fule_Type: "Petrol",
      Transmission: "Manual",
      Discounted_Price: "12.31",
      Price: "12.22",
      EMI: "22,408",
      T_D_Location: "Gaur City, Noida",
      Body_Type: "Sedan",
      Title: "",
      Car_Name: "",
      Color: "blue",
      Features: ["Sunroof", "Keless Entry", "Airbags"],
    },
  ]
  return (
    <>
      <section className="pt-5">
        <Container>
          <div className="Parms-Links flex flex-wrap gap-2 items-center mb-5" >
            <span className="text-[10px] hover:underline cursor-pointer font-bold">Home</span>
            <span className="text-[10px] hover:underline cursor-pointer font-bold -rotate-90"><svg xmlns="http://www.w3.org/2000/svg" stroke="#2e054e" width="7" height="7" viewBox="0 0 14 8" className=""><path fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M386 48L392 54 398 48" transform="translate(-385 -47)"></path></svg></span>
            <span className="text-[10px] hover:underline cursor-pointer  text-[#2E054E] uppercase">Used cars in delhi NCR</span>
            <span className="text-[10px] hover:underline cursor-pointer font-bold -rotate-90"><svg xmlns="http://www.w3.org/2000/svg" stroke="#2e054e" width="7" height="7" viewBox="0 0 14 8" className=""><path fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M386 48L392 54 398 48" transform="translate(-385 -47)"></path></svg></span>
            <span className="text-[10px] hover:underline cursor-pointer  text-[#2E054E] uppercase">Jeep Cars</span>
            <span className="text-[10px] hover:underline cursor-pointer font-bold -rotate-90"><svg xmlns="http://www.w3.org/2000/svg" stroke="#2e054e" width="7" height="7" viewBox="0 0 14 8" className=""><path fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M386 48L392 54 398 48" transform="translate(-385 -47)"></path></svg></span>
            <span className="text-[10px] hover:underline cursor-pointer  text-[#2E054E] uppercase">Used 2022 Jeep compass Cars</span>
          </div>
          <div className="flex items-start">
            <div className="Cars-Slider-Images w-[70%]">
              <DetailImagesSlider />
              <ReasonToBuy />
              <CarOverview />
              <InspectionReport />
              <Benifits />
              <CarSpecifications />
            </div>
            <div className="Sticky-car-details-sidebar w-[30%] ml-3 sticky top-0 h-screen">
              <DetailsRightSidebar />
            </div>
          </div>
        </Container>
        <section className="bg-[#F7F4F8] py-10 mt-10">
          <Container>
            <div className="Similar-Cars  ">
              <NHeading>Similar Cars</NHeading>
              <div className="Similar-Cars-Cards flex flex-wrap items-center ">
                {
                  Similar_Cars_Adds?.map((Car_Ad, indx) => (
                    <div key={indx} className="Car-Add-Short-Card px-2 sm:w-1/2 w-full lg:w-1/4">
                      <CarAddShortCard Car_Ad={Car_Ad} />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="Frequently Asked Questions">
              <FAQs />
            </div>
          </Container>
        </section>
      </section>
    </>
  )
}

export default Page