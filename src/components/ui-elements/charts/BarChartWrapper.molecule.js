import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { useChartData } from '../../../custom-hooks/useChartData';
import { Card } from '../common/Card.atom';
import { IsEmpty } from '../helper/IsEmpty.atom';
import { IterateData } from '../helper/IterateData.atom';
import { ChartSkeleton } from './ChartSkeleton.atom';
 
const BarChartWrapper = ({
  className="",
  barLines=[]
})=> {
    const [data] = useChartData();
    return (
      <Card className={`flex rounded p-6 flex-col ${className}`}>
        <IsEmpty value={data} elementIFEmpty={<ChartSkeleton/>}>
          <h2 className='font-semibold text-base text-black mb-1'>Chart Title</h2>
          <div className='w-full h-4/5'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={35} data={data}>
                {
                  barLines.map((item,index)=>{
                    return (<Bar key={index} dataKey={item.key} fill={item.colorCode} />);
                  })
                }
              </BarChart>
            </ResponsiveContainer>
          </div>
        </IsEmpty>
      </Card>
    );
}

export {
  BarChartWrapper
}