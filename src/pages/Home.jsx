import PopularList from '../components/PopularList'
import NavFilterBar from '../components/NavFilterBar'
import TitleList from '../components/TitleList'
import { useState } from 'react'

export default function Home() {
    const [media_type, setMedia_type] = useState('movie')

    return (
        <div className="w-full space-y-8">
            {/* Popular Section */}
            <section className="w-full">
                <div className="px-4 md:px-6 lg:px-8 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-bebas-neue">
                        Popular Now
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Trending movies and TV shows
                    </p>
                </div>
                <PopularList />
            </section>

            {/* Upcoming Section */}
            <section className="w-full">
                <div className="px-4 md:px-6 lg:px-8 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-bebas-neue">
                        Coming Soon
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Upcoming releases
                    </p>
                </div>
                <NavFilterBar media_type={media_type} setMedia_type={setMedia_type} />
                <TitleList media_type={media_type} />
            </section>
        </div>
    )
} 