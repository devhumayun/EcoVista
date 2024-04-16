import { getAQIData } from '@/lib/weatherInfo';
import Image from 'next/image';
import Card from './Card';

const AQIComponent = async ({ lat, lon }) => {
    const { main, components } = await getAQIData(lat, lon)

    const getAqiValue = (aqi) => {
        switch (aqi) {
            case 1:
                return "Good"
            case 2:
                return "Fair"
            case 3:
                return "Moderate"
            case 4:
                return "Poor"
            case 5:
                return "Very Poor"
            default:
                return "Unknown"
        }
    }

    return (
        <Card>
            <h6 className="feature-name">Air Pollution & Quality</h6>
            <div className="mt-3 space-y-2 lg:space-y-3">
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Air Quality Index
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">{getAqiValue(main.aqi)}</span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Carbon Monoxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.co}μg/m3
                    </span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Nitrogen monoxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.no} μg/m3
                    </span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Nitrogen Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.no2} μg/m3
                    </span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Ozone
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.o3} µg/m³
                    </span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Sulfur Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.so2} µg/m³
                    </span>
                </div>
                {/* item ends */}
                {/* item */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                        <Image
                            className="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            height={30}
                            width={30}
                        />
                        Сoncentration of PM2.5
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components.pm2_5} µg/m³
                    </span>
                </div>
                {/* item ends */}
            </div>

        </Card>
    )
}

export default AQIComponent
