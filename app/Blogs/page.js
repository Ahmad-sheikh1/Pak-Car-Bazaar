import Banner from '../component/Blogs/Banner'
import FactsoftheWeek from '../component/Blogs/FactsoftheWeek'
import BrowseByCategory from '../component/Blogs/BrowseByCategory'
import CelebBanner from '../component/Blogs/CelebBanner'
import LatestPosts from '../component/Blogs/LatestPosts'
import OwnersHandbook from '../component/Blogs/OwnersHandbook'
import BestCarsByCategory from '../component/Blogs/BestCarsByCategory'
import ResearchGuides from '../component/Blogs/ResearchGuides'
import Readers from '../component/Blogs/Readers'

const page = () => {
  return (
    <section className=" bg-[#f5f5f5]">
        <Banner/>
        <FactsoftheWeek/>
        <BrowseByCategory/>
        <CelebBanner/>
        <LatestPosts/>
        <OwnersHandbook/>
        <BestCarsByCategory/>
        <ResearchGuides/>
        <Readers/>
    </section>
  )
}

export default page