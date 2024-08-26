import { useLoaderData,Link } from "react-router-dom"

const Career = () => {
const careerList=useLoaderData()
  return (
    <div className="careers">
        {
            careerList.map(career=>(
                <Link to={career.id} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            )
        )}
    </div>
  )
}
export default Career

export const careersLoader=async()=>{
    const data=await fetch('http://localhost:4400/careers')
    if(!data.ok){
        throw Error('Wrong Api request! Please check.')
    }
    return data.json()
}

