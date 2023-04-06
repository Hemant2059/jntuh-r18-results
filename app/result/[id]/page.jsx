import React from 'react';
import Download from '@/components/Download';
async function getData(id) {
    const res = await fetch(`https://jntuhresults.up.railway.app/api/single?htno=${id}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    
    return res.json();
 
}

const Result = async ({ params }) => {
  const id = params.id
  const resultData = await getData(id);
  let credit = 0;
  return (
    <div className="w-full my-4 px-2 md:px-4">
      <h2 className="text-lg  mb-2">
        NAME : <span className='font-bold'>{resultData.Details.NAME}</span> 
      </h2>
      <h2 className="text-lg  mb-2">
        HALLTICKET : <span className='font-bold'>{resultData.Details.Roll_No}</span>
      </h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-center border-b-2 border-gray-200">
            <th className="p-2">Subject Code</th>
            <th className="p-2">Subject Name</th>
            <th className="p-2">Credits</th>
            <th className="p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(resultData.Results).map((semester) => (
            <React.Fragment key={semester}>
              <tr>
                <td colSpan="5" className="bg-gray-200 py-2 px-4 font-bold text-center">
                  Semester {semester}
                </td>
              </tr>
              {Object.keys(resultData.Results[semester]).map((subject) => {
                if (subject != 'CGPA' & subject != 'total' & subject != 'credits') {
                  return (
                    <tr key={subject} className="border-b border-gray-200 text-center">
                      <td className="p-2">
                        {resultData.Results[semester][subject].subject_code}
                      </td>
                      <td className="p-2">
                        {resultData.Results[semester][subject].subject_name}
                      </td>
                      <td className="p-2">
                        {resultData.Results[semester][subject].subject_credits}
                      </td>
                      <td className="p-2">
                        {resultData.Results[semester][subject].subject_grade}
                      </td>
                    </tr>
                  )
                }
              })}
            </React.Fragment>
          ))}
     
          <tr className='font-bold'>
            <td colSpan="3" className="border-t border-gray-200 px-4 py-2 fon">
              CGPA
            </td>
            <td className="border-t border-gray-200 px-4 py-2">
              {resultData.Results["Total"]}
            </td>
            <td className="border-t border-gray-200 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
      <Download />
    </div>
  );
};


export default Result