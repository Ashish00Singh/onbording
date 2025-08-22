"use client"
import React, { useState } from 'react'
import Inputcustom from '../component/inputcustom'
import { Input } from '@/components/ui/input';
import PlnsDetail from '../component/plnsDetail';
import { Button } from '@/components/ui/button';
import ViewPlan from '../component/plans/viewPlan';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import AlertBox from '../component/dilogbox/alertBox';
import FinalView from '../component/payment/finalView';


interface emergencyC {
    name: string;
    phoneNumber: number | null;
    relationship: string
}

interface FormData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: number | null;
    address: string;
    city: string;
    state: string;
    zipCode: number | null;
    emergencyContact: emergencyC;
}


const form1: FormData = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: null,
    address: "",
    city: "",
    state: "",
    zipCode: null,
    emergencyContact: {
        name: "",
        phoneNumber: null,
        relationship: "",
    }
};

const formLayout = [
    {
        label: 'First Name',
        collect: 'firstName',
        type: 'text',
        error: 'enetr the falidqwas'
    },
    {
        label: 'Last Name',
        collect: 'lastName',
        type: 'text',
        error: 'enetr the falid23'
    },
    {
        label: 'Email Address',
        type: 'email',
        collect: 'emailAddress',
        error: 'enetr the falid'
    },
    {
        label: 'phoneNumber',
        type: 'number',
        collect: 'phoneNumber',
        error: 'enetr the falid'
    },
    {
        label: 'address',
        type: 'text',
        collect: 'address',
        error: 'enetr the falid'
    },
    {
        label: 'city',
        collect: 'city',
        type: 'text',
        error: 'enetr the falid1'
    },
    {
        label: 'state',
        collect: 'state',
        type: 'text',
        error: 'enetr the falid'
    },
    {
        label: 'zipCode',
        collect: 'zipCode',
        type: 'number',
        error: 'enetr the falid'
    },

]
const emergencyLayout = [
    {
        label: 'Name',
        collect: 'name',
        type: 'text',
        error: 'enetr the falid'
    },
    {
        label: 'Phone Number',
        collect: 'phoneNumber',
        type: 'number',
        error: 'enetr the falid'
    },
    {
        label: 'Relationship',
        collect: 'relationship',
        type: 'text',
        error: 'enetr the falid'
    },
]



export default function Onbording() {
    const [data, setData] = useState<any>(form1)
    const [Edit, setEdit] = useState<boolean>(true);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [active, setActive] = useState('personal')
    const [formData, setFormData] = useState<any>(
        {
            personaldta: form1,
            plansDetail: {
                planId: "",
                amount: null
            },
            addional: {
                add: '',
                amount: null
            },
            payment: {
                url: '',
                status: true
            }
        }
    )
    console.log(formData)

    const steps = ['personal', "plans", 'adidional', 'Payment']
    const currentIndex = steps.indexOf(active);


    const collectionData = (e: React.ChangeEvent<HTMLInputElement>, item: any) => {
        const value = e.target.value;

        setData({
            ...data,
            [item.collect]: item.type === "number" ? Number(value) : value, // convert if number
        });

        // ✅ Validation  
        if (item.collect === "phoneNumber") {
            // Ensure at least 10 digits
            if (value && value.length >= 10 && value.length < 11) {
                setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated[item.collect];
                    return updated;
                });
            } else {
                setErrors({ ...errors, [item.collect]: 'invalid' });
            }
        } else {
            // For all other fields
            if (value !== "" && value !== null) {
                setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated[item.collect];
                    return updated;
                });
            }
        }
    };



    const collectionDatas = (
        e: React.ChangeEvent<HTMLInputElement>,
        item: any,
        section: "personaldta" | "plansDetail" | "addional" | "payment",
        type?: any
    ) => {
        const value = e.target.value;


        if (type === "emergencyContact") {

            setFormData((prev: any) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    emergencyContact: {
                        ...prev[section].emergencyContact,
                        [item.collect]: item.type === "number" ? Number(value) : value,
                    }
                }
            }));
        }
        else {
            setFormData((prev: any) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [item.collect]: item.type === "number" ? Number(value) : value,
                },
            }));
        }

        // ✅ Validation
        if (item.collect === "phoneNumber") {
            if (value && value.length === 10) {
                setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated[item.collect];
                    return updated;
                });
            } else {
                setErrors({ ...errors, [item.collect]: "invalid" });
            }
        } else {
            if (value !== "" && value !== null) {
                setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated[item.collect];
                    return updated;
                });
            }
        }
    };

    // const datacollection = () => {
    //     const fieldsToCheck = {
    //         ...data,
    //         ...data.emergencyContact,
    //     };

    //     let newErrors: Record<string, string> = {};

    //     for (const [key, value] of Object.entries(fieldsToCheck)) {
    //         // ✅ Required fields check
    //         if (value === "" || value === null) {
    //             newErrors[key] = `❌ Please fill out the ${key} field.`;
    //             continue; // move to next field
    //         }

    //         // ✅ Email validation
    //         if (key === "emailAddress") {
    //             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //             if (typeof value === "string" && !emailRegex.test(value)) {
    //                 newErrors[key] = "❌ Please enter a valid email address.";
    //             }
    //         }

    //         // ✅ Phone number validation (at least 10 digits)
    //         if (key === "phoneNumber" || key === "phoneNumbers") {
    //             const phone = String(value);
    //             if (!/^\d+$/.test(phone)) {
    //                 newErrors[key] = "❌ Phone number must contain only digits.";
    //             } else if (phone.length !== 10) {
    //                 newErrors[key] = "❌ Phone number must be exactly 10 digits.";
    //             }
    //         }
    //     }

    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors); // store all field errors
    //         return newErrors;
    //     }

    //     setErrors({});
    //     alert("✅ Form submitted successfully!");

    // };


    const datacollection = (): boolean => {
        const fieldsToCheck = {
            ...data,
            // ...data.emergencyContact,
        };

        let newErrors: Record<string, string> = {};

        for (const [key, rawValue] of Object.entries(fieldsToCheck)) {
            const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;

            // ✅ Required fields check
            if (value === "" || value === null || value === undefined) {
                newErrors[key] = `❌ Please fill out the ${key} field.`;
                continue; // move to next field
            }

            // ✅ Email validation
            if (key === "emailAddress") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (typeof value === "string" && !emailRegex.test(value)) {
                    newErrors[key] = "❌ Please enter a valid email address.";
                }
            }

            // ✅ Phone number validation (at least 10 digits)
            if (key === "phoneNumber" || key === "phoneNumbers") {
                const phone = String(value);
                if (!/^\d+$/.test(phone)) {
                    newErrors[key] = "❌ Phone number must contain only digits.";
                } else if (phone.length !== 10) {
                    newErrors[key] = "❌ Phone number must be exactly 10 digits.";
                }
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // store all field errors
            return false; // ❌ invalid form
        }

        setErrors({});
        alert("✅ Form submitted successfully!");
        return true; // ✅ valid form
    };

    const nextStep = () => {
        if (currentIndex < steps.length - 1) {

            setActive(steps[currentIndex + 1]);
        }
    };

    const prevStep = () => {
        if (currentIndex > 0) {
            setActive(steps[currentIndex - 1]);
        }
    };

    const nextStepbtn = () => {
        // console.log(errors)
        if (active === "personal") {

            const fieldsToCheck = {
                ...formData.personaldta,
                ...formData.personaldta.emergencyContact,

            };

            let newErrors: Record<string, string> = {};

            for (const [key, value] of Object.entries(fieldsToCheck)) {
                // ✅ Required fields check
                if (value === "" || value === null) {
                    newErrors[key] = `❌ Please fill out the ${key} field.`;
                    continue; // move to next field
                }

                // ✅ Email validation
                if (key === "emailAddress") {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (typeof value === "string" && !emailRegex.test(value)) {
                        newErrors[key] = "❌ Please enter a valid email address.";
                    }
                }

                // ✅ Phone number validation (at least 10 digits)
                if (key === "phoneNumber" || key === "phoneNumbers") {
                    const phone = String(value);
                    if (!/^\d+$/.test(phone)) {
                        newErrors[key] = "❌ Phone number must contain only digits.";
                    } else if (phone.length !== 10) {
                        newErrors[key] = "❌ Phone number must be exactly 10 digits.";
                    }
                }
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors); // store all field errors
                return newErrors;
            }

            setErrors({});
            alert("✅ Form submitted successfully!");

            setActive('plans')

        } else if (active === "plans") {
            const fieldsToCheck = {
                ...formData.plansDetail,
            };

            // console.log(fieldsToCheck)

            if (fieldsToCheck.planId !== "") {
                // console.log(fieldsToCheck.planId);
                setActive('adidional')

            } else {
                // console.log("asdasd");
            }
        } else if (active === "adidional") {
            setActive('Payment')
        }


    }

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800">
            <div className="max-w-7xl mx-auto p-5">
                {/* Header */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl border border-white/30">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">🏥 Health Insurance Management System</h1>
                    <p className="text-gray-600">Complete solution for insurance administration and customer enrollment</p>
                </div>

                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl border border-white/30">

                    <div className='flex justify-evenly' >
                        {steps.map((item: any, index) =>
                            <p key={index} className={`capitalize ${active === item ? `bg-black text-white p-2 px-4 rounded-sm` : 'p-2 px-4 rounded-sm border-2 border-black'}`} >{item}</p>
                        )}
                    </div>

                </div>

                <div className="personal bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl border border-white/30">


                    {/* <Inputcustom label="Name" placeholder='Name' /> */}
                    {active === 'personal' ?
                        <div>
                            <h2 className='font-bold' >Client Onbording</h2>
                            <div className='grid grid-cols-2 gap-4 pt-8'>
                                {formLayout.map((item: any, index) =>
                                    <div key={index}>
                                        <Inputcustom label={item.label} type={item.type} placeholder='Name'
                                            value={formData.personaldta[item.collect] ?? ''}
                                            onChange={(e) => collectionDatas(e, item, 'personaldta')}
                                        />
                                        {errors[item.collect] && (
                                            <span className="text-red-500 text-sm">{item.error}</span>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className='border mt-8 p-2 py-4 rounded-lg border-red-400'>
                                <h2 className='capitalize'>emergency Layout</h2>

                                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                                    {emergencyLayout.map((item: any, index) =>
                                        <div key={index}>
                                            <Inputcustom label={item.label} type={item.type} placeholder='Name'
                                                value={formData.personaldta?.emergencyContact[item.collect] ?? ''}
                                                onChange={(e) => collectionDatas(e, item, 'personaldta', "emergencyContact")}
                                            />
                                            {errors[item.collect] && (
                                                <span className="text-red-500 text-sm">{item.error}</span>
                                            )}
                                        </div>
                                    )}
                                </div>


                            </div>

                        </div> : null}

                    {active === 'plans' ? <PlnsDetail active={active} setFormData={setFormData} formData={formData} /> : null}

                    {active === 'adidional' ?
                        <div>
                            <h2 className='font-bold' > Adidional</h2>
                            <div>
                                <h2 className='font-bold' >Client Onbording</h2>
                                <div className='grid grid-cols-2 gap-4 pt-8'>
                                    {formLayout.map((item: any, index) =>
                                        <div key={index}>
                                            <Inputcustom disabled={Edit} className='disabled:opacity-75' label={item.label} type={item.type} placeholder='Name'
                                                value={formData.personaldta[item.collect] ?? ''}
                                                onChange={(e) => collectionDatas(e, item, 'personaldta')}
                                            />
                                            {errors[item.collect] && (
                                                <span className="text-red-500 text-sm">{item.error}</span>
                                            )}
                                        </div>
                                    )}

                                </div>
                                <div className='border mt-8 p-2 py-4 rounded-lg border-red-400'>
                                    <h2 className='capitalize'>emergency Layout</h2>

                                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                                        {emergencyLayout.map((item: any, index) =>
                                            <div key={index}>
                                                <Inputcustom label={item.label} type={item.type} placeholder='Name'
                                                    value={formData.personaldta?.emergencyContact[item.collect] ?? ''}
                                                    onChange={(e) => collectionDatas(e, item, 'personaldta', "emergencyContact")}
                                                />
                                                {errors[item.collect] && (
                                                    <span className="text-red-500 text-sm">{item.error}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>


                                </div>
                                <Button className='mt-5' onClick={() => setEdit(!Edit)} > {Edit === true ? "Edit" : "Save"} </Button>
                            </div>

                            <div className='mt-8'>
                                <h2>Select Plan:</h2>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className='my-4 border-black font-semibold text-base' variant="outline">Change the Plan</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[725px]">
                                        <DialogHeader>
                                            <DialogTitle>Change Your Plan</DialogTitle>
                                            <DialogDescription>
                                                Secure your future with Synck Health Plans — simple, reliable, and smart choice for lifelong peace of mind.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <PlnsDetail active={active} setFormData={setFormData} formData={formData} />
                                    </DialogContent>

                                </Dialog>
                                <ViewPlan formData={formData} />



                            </div>

                        </div> : null}

                    {active === 'Payment' ?
                        <div>
                            <h2 className='font-bold' > Payment</h2>

                            <FinalView formData={formData} />

                        </div> : null}

                    {/* <div className='flex justify-between'>
                        {active !== 'personal' ?
                            <button className='bg-black text-white rounded-sm  p-2 px-10 mt-4 ' onClick={prevStep} >prev</button> : null}
                        {active !== 'Payment' ?
                            <button className='bg-black text-white rounded-sm  p-2 px-10 mt-4 ' onClick={nextStep} >Next</button> : null}
                    </div> */}


                </div>


                <div className="plans bg-white/95 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl border border-white/30">
                    <h2 className='font-bold' >plans</h2>

                    <div className=' flex justify-between'>
                        {active !== 'personal' ?
                        <Button className='bg-black text-white rounded-sm  p-2 px-10 mt-4 ' onClick={prevStep} >Prev</Button> : null}
                    {active === 'adidional' ?
                        <AlertBox onClick={nextStepbtn} /> :
                        <Button className='bg-black text-white rounded-sm  p-2 px-10 mt-4 ' onClick={nextStepbtn} >Next </Button>}
                    </div>


                </div>
            </div>
        </div>
    )
}
