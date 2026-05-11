import type { SiteLinksInput } from "@/types/site-links";

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseSiteLinksFormData(formData: FormData): SiteLinksInput {
  return {
    linkedinUrl: asString(formData.get("linkedinUrl")),
    whatsappUrl: asString(formData.get("whatsappUrl")),
    contactUrl: asString(formData.get("contactUrl")),
    contactLabel: asString(formData.get("contactLabel")),
  };
}
