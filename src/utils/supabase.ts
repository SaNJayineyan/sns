import { createClient } from "@supabase/supabase-js";
import type { ConsultationFormData } from "../types";

export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || "https://ajbixzfkdpxnitwedmpa.supabase.co";

export const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqYml4emZrZHB4bml0d2VkbXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2NjE1MTEsImV4cCI6MjEwNzIzNzUxMX0.CC1DALu1LRKEE9ijGfOGvUszMB8_yZwkIcT-JeNlwaY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function submitConsultationToSupabase(
  formData: ConsultationFormData,
  referenceId: string
) {
  const { data, error } = await supabase
    .from("consultations")
    .insert([
      {
        reference_id: referenceId,
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        project_location: formData.projectLocation,
        property_type: formData.propertyType,
        property_size: formData.propertySize || null,
        services_required: formData.servicesRequired,
        budget_range: formData.budgetRange || null,
        consultation_method: formData.consultationMethod || null,
        expected_start: formData.expectedStart || null,
        additional_notes: formData.additionalNotes || null,
        status: "new",
      },
    ])
    .select();

  if (error) {
    console.error("Supabase insert error:", error);
    throw error;
  }

  return data;
}
