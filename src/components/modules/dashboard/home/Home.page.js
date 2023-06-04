import Authorized from '../../../hoc-middlewares/Authorized';
import { LightMoodTemplate } from '../../../ui-elements/templates/LightMood.template';
import { Card } from '../../../ui-elements/common/Card.atom';
import { BarChartWrapper } from '../../../ui-elements/charts/BarChartWrapper.molecule';
import { LineChartTileWrapper } from '../../../ui-elements/charts/LineChartTileWrapper.molecule';
import { PieChartWrapper } from '../../../ui-elements/charts/PieChartWrapper.molecule';

const Home = () =>{
    return(
      <LightMoodTemplate>
         <div className="grid grid-cols-3 gap-4 mb-4">
            <Card className="flex lg:col-span-2 col-span-3 md:h-56 rounded !bg-custom-green-100">
               <div className='w-full block md:flex'>
                  <div className='w-full md:w-1/2  p-[36px]'>
                        <h2 className='font-bold text-lg text-black'>Welcome to your dashboard!</h2>
                        <p className='text-custom-text-black-color-200 text-xs mt-4'>
                           Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production
                        </p>
                  </div>
                  <div className='w-full md:w-1/2 flex items-center justify-center'>
                     <img src='/assets/rightColumnImg.png' alt='logo'/>
                  </div>
               </div>
            </Card>
            <BarChartWrapper
               className='lg:col-span-1 col-span-3 h-56'
               barLines={[
                  {
                     key:"o",
                     colorCode:"#694BDB"
                  }
               ]}
            />
         </div>
         <div className="grid grid-cols-3 gap-4 mb-4">
            <LineChartTileWrapper
               label="High"
               className='h-36 lg:col-span-1 col-span-3'
               dataKey='l'
               colorCode='#FF7777'
            />
            <LineChartTileWrapper
               label="Low"
               className='h-36 lg:col-span-1 col-span-3'
               dataKey='l'
               colorCode='#F3C522'
            />
            <LineChartTileWrapper
               label="Open"
               className='h-36 lg:col-span-1 col-span-3'
               dataKey='o'
               colorCode='#06AA8D'
            />
         </div>
         <div className="grid grid-cols-3 gap-4 mb-4">
            <BarChartWrapper
               className='lg:col-span-2 col-span-3 h-80'
               barLines={[
                  {
                     key:"h",
                     colorCode:"#694BDB"
                  },
                  {
                     key:"l",
                     colorCode:"#2AEBC8"
                  }
               ]}
            />
            <PieChartWrapper
               className='h-80 lg:col-span-1 col-span-3'
               dataKey="h"
            />
         </div>
      </LightMoodTemplate>

    );
}

export default Authorized(Home);