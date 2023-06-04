import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useChartData } from '../../../custom-hooks/useChartData';
import { Card } from '../common/Card.atom';
import { _get } from '../../../helpers/lodash.wrappers';
import { calculatePercentage } from '../../../helpers/common.helper';
import { IsEmpty } from '../helper/IsEmpty.atom';
import { LintSkeleton } from './ChartSkeleton.atom';

const LineChartTileWrapper = ({
  label="",
  className="",
  dataKey="",
  colorCode=""
})=> {
    const [data] = useChartData();
    return (
      <Card className={`p-6 ${className}`}>
        <IsEmpty value={data} elementIFEmpty={<LintSkeleton/>}>
          <div className='w-3/5'>
              <small className='font-semibold text-xs text-black'>{label}</small>
              <h1 className='text-2xl font-bold text-black mb-4'>{_get(data,`0.${dataKey}`,'-')}</h1>
              <small className='text-xs font-normal text-black'>{calculatePercentage(_get(data,`1.${dataKey}`,0),_get(data,`0.${dataKey}`,0))}% Since yesterday</small>
          </div>
          <div className='w-2/5'>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={120} height={30} data={[...data].slice(0, 3)}>
                <Line type="monotone" dataKey={dataKey} stroke={colorCode} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </IsEmpty>
      </Card>
    );
}

export {
  LineChartTileWrapper
}