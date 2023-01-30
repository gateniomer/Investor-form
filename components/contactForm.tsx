import InputField from "./inputField";
import AdditionalField from "./additionalField";
import CustomButton from "./customButton";
import { FormEvent, useState } from "react";
import { AdditionalFieldType, AdditionalFieldTypes } from "../utils/types";
export default function ContactForm() {
  const [additionalFields, setAdditionalFields] = useState<
    AdditionalFieldType[]
  >([{ id: 0, type: AdditionalFieldTypes[0], link: "" }]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const onAdd = () => {
    setAdditionalFields((prev) => [
      ...prev,
      {
        id: additionalFields.length,
        type: AdditionalFieldTypes[0],
        link: "",
      },
    ]);
  };
  const onChange = (id: number, newField: AdditionalFieldType) => {
    setAdditionalFields((prev) =>
      prev.map((field) => {
        if (field.id === id) return newField;
        return field;
      })
    );
  };

  const onDel = (id: number) => {
    if (additionalFields.length <= 1) {
      setAdditionalFields([
        {
          id: 0,
          type: AdditionalFieldTypes[0],
          link: "",
        },
      ]);
      return;
    }

    setAdditionalFields((prev) =>
      prev
        .filter((field) => field.id !== id)
        .map((field, index) => {
          return {
            ...field,
            id: index,
          };
        })
    );
  };
  const sendDetails = (e: FormEvent) => {
    e.preventDefault();
    fetch(process.env.NEXT_PUBLIC_URL + "/api/form", {
      method: "POST",
      body: JSON.stringify({
        contactInfo: {
          firstName,
          lastName,
          email,
          linkedin,
        },
        additionalFields,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form className="mt-10" onSubmit={(e) => sendDetails(e)}>
      <h3 className="font-bold mb-3">Your contact info</h3>
      <div className="flex gap-5 flex-wrap mb-10">
        <InputField
          required
          label="First Name"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          required
          label="Last Name"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          required
          label="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          required
          label="LinkedIn"
          value={linkedin}
          type="text"
          onChange={(e) => setLinkedIn(e.target.value)}
        />
      </div>
      <h3 className="font-bold mt-5 mb-3">
        Additional read (website, pitch deck, Calendly, Google Slides, LinkTree,
        Notion, BriefLink etc.. )
      </h3>
      <div className="flex flex-col gap-3">
        {additionalFields.map((field, index) => {
          if (index === additionalFields.length - 1) {
            return (
              <AdditionalField
                field={field}
                onAdd={onAdd}
                onDel={onDel}
                onChange={onChange}
                last={true}
              />
            );
          }
          return (
            <AdditionalField
              field={field}
              onAdd={onAdd}
              onChange={onChange}
              onDel={onDel}
            />
          );
        })}
      </div>
      <CustomButton customClass="text-lg ">Join</CustomButton>
    </form>
  );
}
