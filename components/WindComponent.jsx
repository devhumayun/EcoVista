import { getWindData } from '@/lib/weatherInfo'
import Image from 'next/image'
import Card from './Card'

const WindComponent = async ({ lat, lon }) => {
    const { speed, deg } = await getWindData(lat, lon)
    return (
        <Card>
            <h6 className="feature-name">Wind</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icon_wind.png"
                    alt="rain icon"
                    height={30}
                    width={30}
                />
                <div className='flex gap-2'>
                    <h3 className="feature-title">{speed}</h3>
                    <span>meter/sec</span>
                </div>
                <span className="feature-name">{deg} degrees</span>
            </div>
        </Card>
    )
}

export default WindComponent
