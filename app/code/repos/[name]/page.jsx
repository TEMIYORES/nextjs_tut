import RepoDirs from "@/app/components/RepoDirs";
import Repo from "@/app/components/Repo";
import Loading from "@/app/loading";
import Link from "next/link";
import React, { Suspense } from "react";

const SingleRepo = ({ params }) => {
  const { name } = params;
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Go Back Repositories
      </Link>
      <Suspense fallback={<Loading />}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default SingleRepo;
