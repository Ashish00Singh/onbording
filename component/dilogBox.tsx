import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function DilogBox({item}:any) {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
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
            </div>
            {/* <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter> */}
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
