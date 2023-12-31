import { useEffect } from "react";
const { StarIcon, CheckCircleIcon }=require("@heroicons/react/24/solid");
// const { LogInWithAnonAadhaar,  }=require("anon-aadhaar-react");
// const { useAnonAadhaar } =require("anon-aadhaar-react");
// const { AnonAadhaarProof } = require("anon-aadhaar-react");
const React =require("react");

export default function DailyComp() {
  // const [anonAadhaar] = useAnonAadhaar();

  const anonAadhaar = {"status":"hi"}
  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  const isComplete = false;

  return (
    <div>
      {anonAadhaar.status == "logged-in" ? (
        <section className="my-3 ring-2 ring-indigo-400 rounded-xl p-3">
          <div className="mt-2 flex justify-between items-center">
            <h1 className="font-bold text-2xl">DexTech DailyGM</h1>
            <p>My points: 0</p>
          </div>
          <div className="mt-3 flex justify-between">
            <div
              className={`grid grid-cols-1 gap-3 shadow-lg rounded-lg p-3 px-4 ring-1 ${
                !isComplete
                  ? "ring-indigo-600 bg-indigo-100"
                  : "ring-green-600 bg-green-100"
              }`}
            >
              {!isComplete ? (
                <StarIcon className="h-10 w-10 text-indigo-600" />
              ) : (
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              )}
              <div className="font-bold">Day 0</div>
            </div>
          </div>
          <div className="mt-3">
            <div className="text-sm">Task 1: Share something on Lens</div>
          </div>
          <div className="py-2 px-3 text-xl text-center mt-7 text-white bg-indigo-600 rounded-lg mb-2">
            Post on Lens
          </div>
          <div className="flex justify-between items-center">
            <div className="pt-2 text-xs">
              Powered by{" "}
              <span className="font-bold text-indigo-400">RPS Labs</span>
            </div>
            <div>
              <p>✅ Proof is valid</p>
              {/* <AnonAadhaarProof
                code={JSON.stringify(anonAadhaar.pcd, null, 2)}
              /> */}
            </div>
          </div>
        </section>
      ) : (
        <section className="my-3 ring-2 ring-indigo-400 rounded-xl p-3 text-center grid grid-row-1 justify-center">
          <div className="mt-2 mb-3 font-bold">
            Connect with Anon Aadhar to continue
          </div>
          <div>
            {/* <LogInWithAnonAadhaar /> */}
            <p>{anonAadhaar?.status}</p>
          </div>
        </section>
      )}
    </div>
  );
}
