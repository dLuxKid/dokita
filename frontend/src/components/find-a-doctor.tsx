import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function FindADoctor() {
  return (
    <section className="p-[5%] py-[10%] md:py-[5%] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 w-full flex flex-col gap-8">
        <h3 className="capitalize text-black">Find a doctor</h3>
        <form className="flex items-start lg:items-center justify-between gap-8 flex-col lg:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <label className="relative flex flex-1 flex-shrink-0 w-full">
              <Input type="text" name="name" placeholder="Name" />
            </label>
            <label className="relative flex flex-1 flex-shrink-0 w-full">
              <Input type="text" name="speciality" placeholder="Speciality" />
            </label>
          </div>
          <div className="relative flex flex-1 flex-shrink-0 items-center justify-center gap-6">
            <label htmlFor="available">
              <p className="text-black">Available</p>
            </label>
            <Switch id="available" className="w-[64px] h-[36px]" />
          </div>
          <Button>Search</Button>
        </form>
      </div>
    </section>
  );
}
