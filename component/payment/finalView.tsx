import React from 'react'
import ViewPlan from '../plans/viewPlan'

export default function FinalView({ formData }: any) {
    console.log(formData?.personaldta)
    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4 p-3'>
                <div className='mt-3'>
                    <h5>Name</h5>
                    <p className=' capitalize'>{formData?.personaldta.firstName} {formData?.personaldta.lastName}</p>
                </div>

                <div className='mt-3'>
                    <h5>Email Id</h5>
                    <p>{formData?.personaldta.emailAddress}</p>
                </div>

                <div className='mt-3'>
                    <h5>Phone Number</h5>
                    <p>{formData?.personaldta.phoneNumber}</p>
                </div>
            </div>

            <h4 className='mt-4 p-3'>Address</h4>
            <div className=' border p-3 rounded-xl ' >

                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className=''>
                        <h5>City</h5>
                        <p className=' capitalize'>{formData?.personaldta.city}</p>
                    </div>

                    <div className=''>
                        <h5>State</h5>
                        <p className=' capitalize'>{formData?.personaldta.state}</p>
                    </div>

                    <div className=''>
                        <h5>Zip Code</h5>
                        <p className=' capitalize'>{formData?.personaldta.zipCode}</p>
                    </div>
                </div>

                <div className='mt-3'>
                    <h5>Address</h5>
                    <p className='mt-2 border rounded-sm p-2 capitalize' >{formData?.personaldta.address}</p>
                </div>

            </div>

            <div className='border mt-5 p-2 py-4 rounded-lg border-red-400'>
                <h2 className='capitalize'>emergency Layout</h2>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-4'>
                    <div className='mt-3'>
                        <h5>Address</h5>
                        <p className='mt-2 p-2 capitalize' >{formData?.personaldta?.emergencyContact.name}</p>
                    </div>

                    <div className='mt-3'>
                        <h5>Phone Number</h5>
                        <p className='mt-2 p-2 capitalize' >{formData?.personaldta?.emergencyContact.phoneNumber}</p>
                    </div>

                    <div className='mt-3'>
                        <h5>Relationship</h5>
                        <p className='mt-2 p-2 capitalize' >{formData?.personaldta?.emergencyContact.relationship}</p>
                    </div>
                </div>

            </div>

            {/* Plans */}

            <div className='mt-5'>
                <h2 className=' mb-3.5'>Plans Detail</h2>
                <ViewPlan formData={formData} />
            </div>

        </div>
    )
}
