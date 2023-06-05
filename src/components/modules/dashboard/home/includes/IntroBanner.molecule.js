import { Card } from '../../../../ui-elements/common/Card.atom';

const IntroBanner = () =>{
    return (
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
    )
}
export {
    IntroBanner
}