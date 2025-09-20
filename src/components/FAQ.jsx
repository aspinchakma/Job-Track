const FAQ = () => {
  return (
    <div className="w-[95%] lg:w-[85%] mx-auto">
      <h2 className="text-[#2747d5] w-fit px-6 py-2 rounded-full mx-auto bg-[#dee3f7]">
        F.A.Qs
      </h2>
      <h3 className="text-[24px] lg:text-[50px] font-semibold text-center leading-[60px]">
        Things people often <br />
        ask <span className="text-[#2747d5]">about job</span>
      </h3>
      {/* Accordion */}
      <div className="mx-auto lg:w-[65%]">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-8 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-[20px]">
            What Types Of Houses Are Available For Rent?
          </div>
          <div className="collapse-content text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was .accordion-body popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-[20px]">
            What Is The Rental Application Process?
          </div>
          <div className="collapse-content text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was .accordion-body popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-[20px]">
            What Are Your Rental Rates?
          </div>
          <div className="collapse-content text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was .accordion-body popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-[20px]">
            What Are The Lease Terms?
          </div>
          <div className="collapse-content text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was .accordion-body popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-[20px]">
            What Is Your Policy On Pets?
          </div>
          <div className="collapse-content text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was .accordion-body popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
