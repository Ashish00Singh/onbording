import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const data = [
    {
        "id": 1755494281498,
        "familyType": "all Plan-3",
        "sumInsured": "Single type",
        "ageBand": "700",
        "basePremium": "5000",
        'type': 'wellness',
        "featcher": "list|\nlist1|\nlist1|\nlist1|"
    },
    {
        "id": 1755495953774,
        "familyType": "Plan-2",
        "sumInsured": "as",
        "ageBand": "42",
        "basePremium": "dfg",
        "featcher": "agasguyas"
    },
    {
        "id": 1755495953773,
        "familyType": "plan-1",
        "sumInsured": "as",
        "ageBand": "42",
        "basePremium": "dfg",
        "featcher": "agasguyas"
    }
]


import datas from "./data.json"
import DilogBox from './dilogbox/dilogBox'

export default function PlnsDetail({ active, setFormData, formData }: any) {
    const [select, setSelect] = useState(formData.plansDetail?.planId ?? {})
    // console.log(formData)
    return (

        <div>
            <h2 className='font-bold mb-5' > Plans</h2>


            {/* <div className='flex gap-5' >
                {data.map((item: any, index) =>

                    <div key={index} onClick={() => {
                        setFormData({
                            ...formData,
                            plansDetail: {
                                ...formData.plansDetail,
                                planId: item.id,
                            },
                        });
                        setSelect(item.id)
                    }} className={`p-4 border-4 rounded-sm ${select === item.id ? `border-red-700` : `border-black`}`}>
                        <Button  >
                            {item.familyType}
                        </Button>
                        {item.featcher.includes("|") ?
                            <ul className="list-disc list-inside">
                                {item.featcher?.split("|")
                                    .filter((f: string) => f.trim() !== "")
                                    .map((f: string, i: number) => (
                                        <li key={i}>{f.trim()}</li>
                                    ))}
                            </ul> : `${item.featcher}`}
                    </div>

                )}
            </div> */}

            {/* <h1>Plans</h1> */}

            <div className='grid grid-cols-3 my-10 gap-4'>

                {
                    datas.map((item: any) =>

                        <div
                            onClick={() => {
                                setFormData({
                                    ...formData,
                                    plansDetail: {
                                        ...formData.plansDetail,
                                        planId: item.planId,
                                    },
                                });
                                setSelect(item.planId)
                            }} key={item.planId}
                            className={`${select === item.planId ? `border-red-700 shadow-lg shadow-red-300` : `shadow-lg hover:shadow-2xl `}  p-6 border rounded-2xl  bg-white transition`}>
                            <h2 className="text-xl font-semibold mb-2">{item.Name} </h2>
                            <p className="text-sm text-gray-500 mb-4">{item.Domains}</p>
                            <p className="mb-6 text-gray-700">{item.ProductDescription}</p>

                            {/* <div className="space-y-4">
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
                            </div> */}
                            <DilogBox item={item} />

                            <button className={`${select === item.planId ? `bg-red-700` : `bg-blue-600`} mt-6 w-full py-2 rounded-xl  text-white font-medium hover:bg-blue-700 transition`}>
                                {item.Price}
                            </button>
                        </div>

                    )
                }</div>

            {/* <div className="p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-8">Our Plans</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   
                    <div className="p-6 border rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold mb-2">Plan Name</h2>
                        <p className="text-sm text-gray-500 mb-4">Domains</p>
                        <p className="mb-6 text-gray-700">This is a short product description to explain the plan details.</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-800">Insurance Element</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Offline Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Online Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Coverage</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Family</li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-6 w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                            Choose Plan
                        </button>
                    </div>

                 
                    <div className="p-6 border rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold mb-2">Plan Name</h2>
                        <p className="text-sm text-gray-500 mb-4">Domains</p>
                        <p className="mb-6 text-gray-700">This is a short product description to explain the plan details.</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-800">Insurance Element</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Offline Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Online Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Coverage</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Family</li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-6 w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                            Choose Plan
                        </button>
                    </div>

                  
                    <div className="p-6 border rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold mb-2">Plan Name</h2>
                        <p className="text-sm text-gray-500 mb-4">Domains</p>
                        <p className="mb-6 text-gray-700">This is a short product description to explain the plan details.</p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-gray-800">Insurance Element</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Offline Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Online Intervention</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>list1</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800">Coverage</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Family</li>
                                </ul>
                            </div>
                        </div>

                        <button className="mt-6 w-full py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div> */}


        </div>

    )
}
