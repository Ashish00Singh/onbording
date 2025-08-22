import React from 'react'
import datas from "../data.json"

export default function ViewPlan({ formData }: any) {
    console.log(formData?.plansDetail?.planId)
    return (
        <div>
            {
                datas.filter((item: any) => item.planId === formData?.plansDetail?.planId).map((item, index) => (
                    <div key={item.planId}
                        className="shadow-lg hover:shadow-2xl p-6 border rounded-2xl  bg-white transition">
                        <h2 className=" font-semibold mb-2 text-3xl">{item.Name} </h2>
                        <p className="mb-4"><span className='text-sm text-blue-500 border rounded-3xl px-4  border-blue-500 font-semibold'>{item.Domains}</span></p>
                        <p className="mb-6 text-gray-700">{item.ProductDescription}</p>

                        <div className="space-y-4">
                            {item.InsuranceElement !== "" ?
                                <div>
                                    <h3 className="font-medium text-gray-800">Insurance Element</h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {item.InsuranceElement.includes("|") ?
                                            <ul className="list-disc list-inside">
                                                {item.InsuranceElement?.split("|")
                                                    .filter((f: string) => f.trim() !== "")
                                                    .map((f: string, i: number) => (
                                                        <li key={i}>{f.trim()}</li>
                                                    ))}
                                            </ul> : `${item.InsuranceElement}`}
                                    </ul>
                                </div> : null}

                            {item.OfflineIntervention !== "" ?

                                <div>
                                    <h3 className="font-medium text-gray-800">Offline Intervention</h3>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {item.OfflineIntervention.includes("|") ?
                                            <ul className="list-disc list-inside">
                                                {item.OfflineIntervention?.split("|")
                                                    .filter((f: string) => f.trim() !== "")

                                                    .map((f: string, i: number) => (
                                                        <li key={i}>{f.trim()}</li>
                                                    ))}
                                            </ul> : `${item.OfflineIntervention}`}
                                    </ul>
                                </div> : null}

                            <div>
                                <h3 className="font-medium text-gray-800">Online Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {item.OnlineIntervention.includes("|") ?
                                        <ul className="list-disc list-inside">
                                            {item.OnlineIntervention?.split("|")
                                                .filter((f: string) => f.trim() !== "")

                                                .map((f: string, i: number) => (
                                                    <li key={i}>{f.trim()}</li>
                                                ))}
                                        </ul> : `${item.OnlineIntervention}`}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Coverage</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Family</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800">Price</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li> {item.Price}</li>
                                </ul>
                            </div>
                        </div>

                        {/* <button className="bg-blue-600 mt-6 w-full py-2 rounded-xl  text-white font-medium hover:bg-blue-700 transition" >
                            {item.Price}
                        </button> */}
                    </div>
                )
                )
            }
        </div>
    )
}
