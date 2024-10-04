import Card from '../components/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [posts, setPosts] = useState(null)
    const [mode, setMode] = useState(null)
    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/posts')
        const dataObject = response.data.data
        const arrayOfData = Object.keys(dataObject).map(key => [key, dataObject[key]])
        setPosts(arrayOfData)
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return (
        <div className="app" style={mode ? {height: '77vh', overflow: 'hidden'} : null}>
            <div className="dashboard">
                <div className="dashboard-info-container">
                    <div>
                        <h1>Adventure Everywhere</h1>
                        <p>Keep calm & travel on</p>
                    </div>
                    <button onClick={() => setMode('create')}>Add your adventure</button>
                </div>

                <div className="posts-container">
                    {posts?.map((post) => (
                        <Link to={`/posts/${post[0]}`} id="link" key={post[0]}>
                            <Card post={post[1]} mode={mode} setMode={setMode}/>
                        </Link>
                    ))}
                    <div className='add-your-own'>
                        <button onClick={() => setMode('create')}>Add your adventure</button>
                    </div>
                </div>
            </div>
            {mode && <Modal mode={mode} setMode={setMode} fetchData={fetchData}/>}
        </div>
    )
}

export default Dashboard