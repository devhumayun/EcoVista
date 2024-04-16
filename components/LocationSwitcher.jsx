"use client"
import { getLocationLatLonList } from '@/lib/locationInfo'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LocationSwitcher = () => {
    const [showLocationList, setShowLocationList] = useState(false)
    const [locationList, setLocationList] = useState([])
    console.log(locationList);
    useEffect(() => {
        async function getLocationsList() {
            const locations = await getLocationLatLonList()
            setLocationList(locations)
        }

        getLocationsList()
    }, [])

    return (
        <div className="relative">
            <button
                onClick={() => setShowLocationList(!showLocationList)}
            >
                <Image
                    className="size-9"
                    src="/link.svg"
                    alt="link icon"
                    height={30}
                    width={30}
                />
            </button>
            {
                showLocationList &&
                <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                    <ul
                        role="list"
                        className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                    >
                        {
                            locationList.map((info) => (
                                <li key={info.location}>
                                    <Link href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}>{info.location}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default LocationSwitcher
