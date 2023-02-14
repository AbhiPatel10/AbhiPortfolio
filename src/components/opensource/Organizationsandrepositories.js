import React, {useEffect} from "react";
import Heading from "../../components/opensource/Heading";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const Organizationsandrepositories = ({pinnedItems}) => {


      const getStaticProps = async()=>{
        console.log("run")
        let httpLink = createHttpLink({
            uri: "https://api.github.com/graphql",
          });
        
          const authLink = setContext((_, { headers }) => {
            const tocken = "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"
            return {
              headers: {
                ...headers,
                authorization: `Bearer ${tocken}`,
              },
            };
          });
        
          const client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
          });
        
            const {data} =  await client.query({
                query: gql`
                {
                    user(login: "AbhiPatel10") {
                        contributionsCollection {
                          contributionCalendar {
                            totalContributions
                            weeks {
                              contributionDays {
                                contributionCount
                                date
                              }
                            }
                          }
                          totalRepositoryContributions
                          totalPullRequestReviewContributions
                        }
                        issues {
                            totalCount
                        }
                        pullRequests {
                          totalCount
                        }
                        pinnedItems(first: 10) {
                          totalCount
                          nodes {
                            ... on Repository {
                              name
                              description
                              nameWithOwner
                              url
                              primaryLanguage {
                                name
                                color
                              }
                              languages(first: 10) {
                                edges {
                                  node {
                                    name
                                    color
                                  }
                                }
                              }
                              visibility
                            }
                          }
                        }
                        pullRequests {
                          totalCount
                        }
                        issues {
                          totalCount
                        }
                        starredRepositories {
                          totalCount
                        }
                        repositoriesContributedTo {
                          totalCount
                        }
                        repositories {
                          totalCount
                        }
                        gists {
                          totalCount
                        }
                        followers {
                          totalCount
                        }
                        organizations(first: 10) {
                          totalCount
                          edges {
                            node{
                              name
                              url
                              avatarUrl
                            }
                          }
                        }
                      }
                  }
                `
            });
        
            console.log("data", data)
            const {user} = data;
            const pinnedItems = await user.pinnedItems.edges.map(({node}) => node);
            
            console.log("pinnedItems", pinnedItems)
          return {
            props: {
                pinnedItems
            },
          };
      }


useEffect(() => {
    getStaticProps()
}, [])




  return (
    
    <>
    {console.log("data", pinnedItems)}
      <Heading title="Contributed Organizations and Popular Repositories" />
      <section class="text-gray-600 body-font">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="p-2 md:w-1/3 w-full ">
              <div class="h-full border-gray-300 border p-8 rounded shadow-md">
                <h1>Pull Request Distribution</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center" href="/">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-2 md:w-2/3 w-full ">
              <div class="h-full border-gray-300 border p-8 rounded shadow-md">
                <h1>Issue Distribution</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center" href="/">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Organizationsandrepositories;

// export async function getStaticProps() {
//   const httpLink = createHttpLink({
//     uri: "https://api.github.com/graphql",
//   });

//   const authLink = setContext((_, { headers }) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer ${process.env.GITHUB_ACCESS_TOCKEN}`,
//       },
//     };
//   });

//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

//     const {data} =  await client.query({
//         query: gql`{
//             user(login: "colbyfayock") {
//                 pinned Items(first: 6) {
//                     totalCount
//                     edges {
//                         node {
//                             ... on Repository
//                                 id
//                                 name
//                                 url
//                                 stargazerCount
//                             }
//                         }
//                     }
//                 }
//             }`,
//     });

//     console.log("data", data)
//     const {user} = data;
//     const pinnedItems = user.pinnedItems.edges.map(({node}) => node);

//   return {
//     props: {
//         pinnedItems
//     },
//   };
// }
