import * as Yup from "yup";

export const emailSchema = (message) => {
  const userRegex =
    /^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*$/i;
  const domainRegex =
    /^((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+)(?:[A-Z0-9-]{2,63})$/i;

  return Yup.string()
    .max(128)
    .test({
      name: "email",
      message,
      test: function test(value) {
        if (!value) return true;
        if (typeof value !== "string") return false;

        const index = value.indexOf("@");
        if (index === -1) return false;

        const userPart = value.slice(0, index);
        const domainPart = value.slice(index + 1);

        // since safari does not support negative lookbehind we added additional check of the domain part
        return (
          userRegex.test(userPart) &&
          domainRegex.test(domainPart) &&
          !domainPart.endsWith("-")
        );
      },
    });
};

export const nameSchema = (message) =>
  Yup.string()
    .matches(/^[A-Za-zА-Яа-я]+([-` '’][A-Za-zА-Яа-я]+)*$/, message)
    .max(30);

export const phoneSchema = (message) =>
  Yup.string().matches(
    /^(?:\+?1[- ]?)?\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/,
    message
  );
