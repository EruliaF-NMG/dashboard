import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useChartData } from '../../../custom-hooks/useChartData';
import { Card } from '../common/Card.atom';
import { _get } from '../../../helpers/lodash.wrappers';
import { IsEmpty } from '../../ui-elements/helper/IsEmpty.atom';
import { ChartSkeleton } from './ChartSkeleton.atom';
 
const PieChartWrapper = ({
  className="",
  dataKey=""
})=> {
    const [data] = useChartData();
    const COLORS = ['#FF7777', '#2AEBC8', '#694BDB'];
    
    return (
      <Card className={`flex h-56 rounded p-6 flex-col ${className}`}>
        <IsEmpty value={data} elementIFEmpty={<ChartSkeleton/>}>
          <h2 className='font-semibold text-base text-black mb-1'>Chart Title</h2>
          <div className='w-full h-4/5 '>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={100}>
              <Pie
                data={[...data].slice(0, 3)}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey={dataKey}
                label={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            </ResponsiveContainer>
          </div>
        </IsEmpty>
      </Card>
    );
}

export {
  PieChartWrapper
}