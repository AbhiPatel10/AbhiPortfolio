import React from "react";
import "./style.css";
import Header from "../../components/header";
import Distributiongraph from "../../components/opensource/distributiongraph";
import ContributionGraph from "../../components/opensource/ContributionGraph";
import Heading from "../../components/opensource/Heading";
import Organizationsandrepositories from "../../components/opensource/Organizationsandrepositories";

const Opensource = () => {
  

  return (
    <>
      <section>
        <div className="main-container">
          <Header />
        </div>
        <div class="Opensource-sec px-5 py-10 mx-auto">
          <Heading title="Contributions" />
          <div class="flex w-full m-auto flex-wrap -m-2">
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Pull Requests
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Issues
                </h2>
                <p class="text-gray-800 font-semibold">10</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Started Repositoris
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Repositories contributed to
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Repositories
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Gists
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Followers
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div class="h-full flex flex-col justify-center items-center shadow-md border-gray-200 border p-4 rounded-lg">
                <h2 class="text-gray-600 text-xl title-font font-bold">
                  Pull Requests reviewed
                </h2>
                <p class="text-gray-800 font-semibold">100</p>
              </div>
            </div>
          </div>
          <Distributiongraph />
          <ContributionGraph />
          <Organizationsandrepositories />
        </div>
      </section>
    </>
  );
};

export default Opensource;
