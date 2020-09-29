import Layout from '../components/Layout';
import Link from 'next/Link';


const jobs = [
  // Job title, company name, logo, skills required and country.
  {
    id: 'cjz1ipl9x009a0758hg68h7vy',
    title: 'Senior Fullstack Engineer - Platform',
    company: {
      name: 'Segment',
      logoUrl: null
    },
    tags: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Full Stack" },
      { name: "Go" },
      { name: "AWS" },
      {name: "Docker"},
      {name: "Kafka"},
      {name: "Senior"}
    ],
    cities: [
      {
        name: 'San Francisco',
        country: {
          name: 'United States'
        }
      }
    ],
  },
  {
    id: 'cjwt2a8j700by0793lnvon5c9',
    title: 'Full Stack JavaScript Developer',
    company: {
      name: 'Unrealists',
      logoUrl: null
    },
    tags: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Full Stack" },
      { name: "Redux" },
      { name: "Serverless" },
      {name: "Lambda"},
      {name: "AWS"},
      {name: "Angular"},
      {name: "Vue"}
    ],
    cities: [
      {
        name: 'Berlin',
        country: {
          name: 'Germany'
        }
      }
    ],
  },
  {
    id: 'cjwnkzzh003bh0756hc34rui5',
    title: 'Full Stack JavaScript Developer',
    company: {
      name: 'AddJust',
      logoUrl: 'https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTYwMDA1ODc3LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:785f90b4223269777911185d2416e87cae7cf7364883b028d282f088046c1cf9/PJD7vCBRDO0sbiLs0vIQ'
    },
    tags: [
      { name: "TypeScript" },
      { name: "Apollo" },
      { name: "Full Stack" },
      { name: "AWS" },
      { name: "Jest" },
      {name: "Postgraphile"},
      {name: "Firestore"},
      {name: "Cypress.io"},
      {name: "Flutter"},
      {name: "CircleCI"}
    ],
    cities: [],
  },
  {
    id: 'cjuvb571b018607351syq4e73',
    title: 'Python / Django Developer',
    company: {
      name: 'Mixcloud',
      logoUrl: 'https://cdn.filestackcontent.com/XeZED8N9QAG5BBxdyyL1'
    },
    tags: [
      { name: "Django" },
      { name: "Python" },
    ],
    cities: [
      {
        name: 'London',
        country: {
          name: 'United Kingdom'
        }
      },
      {
        name: 'Cambridge',
        country: {
          name: 'United Kingdom'
        }
      }
    ],
  },
];

export default function Home() {
  return (
    <Layout title="GraphQL jobs">
      <h1 className="text-4xl mb-8 text-center">Work with GraphQL in a modern startup.</h1>
      <div className="mt-2">
        <input
          className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
          placeholder="Search..."
        />

        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <Link href={`/c/${job.company.name}/${job.title}`}>
                <a>
                  <img src={job.company.logoUrl} alt={job.company.name} />
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