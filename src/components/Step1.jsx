const Step1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-marine-blue mb-2">
        Personal info
      </h1>
      <p className="text-cool-gray mb-6">
        Please provide your name, email address, and phone number.
      </p>

      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-marine-blue">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className="w-full border border-light-gray rounded-md p-2 mt-1 focus:outline-none focus:border-purplish-blue"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-marine-blue">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full border border-light-gray rounded-md p-2 mt-1 focus:outline-none focus:border-purplish-blue"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-marine-blue">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="w-full border border-light-gray rounded-md p-2 mt-1 focus:outline-none focus:border-purplish-blue"
          />
        </div>
      </form>
    </div>
  )
}

export default Step1
