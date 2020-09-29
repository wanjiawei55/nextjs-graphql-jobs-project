import Layout from '../components/Layout';
import Link from 'next/Link';
import { useQuery, gql } from '@apollo/client'


const allJobs = gql`
  query allJobs {
    jobs {
      id
      title
      company{
        name
        logoUrl
      }
      tags{
        name
      }
      cities{
        name
        country{
          name
        }
      }
    }
  }
`;


export default function Home() {

  const { data, loading, error } = useQuery(allJobs);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Whoops ... Something is wrong!</p>

  return (
    <Layout title="GraphQL jobs">
      <h1 className="text-4xl mb-8 text-center">Work with GraphQL in a modern startup.</h1>
      <div className="mt-2">
        <input
          className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
          placeholder="Search..."
        />

        <ul>
          {data.jobs.map((job, index) => (
            <li key={index}>
              <Link href={`/c/${job.company.name}/${job.title}`}>
                <a className="border p-4 border-gray my-2 
                flex item-center text-md bg-gray-200 rounded-md">
                  <img className="w-20 h-20 mr-3" src={job.company.logoUrl} alt={job.company.name} />
                  <p className="text-xl">{job.title}</p>
                  {job.tags.map((tag) => (
                    <span>{tag.name}</span>
                  ))}
                  <ul>
                    {job.cities.map((city) => (
                      <li>{city.name}, {city.country.name}</li>
                    ))}
                  </ul>
                </a>
              </Link>
            </li>

          ))}
          </ul>        
      </div>
    </Layout>
  );
}