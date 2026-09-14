"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ProjectForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      companyName: String(formData.get("companyName") || ""),
      email: String(formData.get("email") || ""),
      projectType: String(formData.get("projectType") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      projectDescription: String(formData.get("projectDescription") || ""),
    };

    try {
      const response = await fetch("/api/submit-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to submit your project inquiry."
        );
      }

      setStatus("success");
      setMessage(
        "Thank you. Your project inquiry has been received by Vertra Technologies."
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Something went wrong. Please try submitting your project again."
        );
      }
    }
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="fullName">NAME</label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your name"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">EMAIL</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="companyName">COMPANY</label>

          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company or brand"
            disabled={status === "submitting"}
          />
        </div>

        <div className="form-field">
          <label htmlFor="projectType">PROJECT TYPE</label>

          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            required
            disabled={status === "submitting"}
          >
            <option value="" disabled>
              Select project type
            </option>

            <option value="Website + Digital">Website + Digital</option>
            <option value="Software + Platform">Software + Platform</option>
            <option value="Mobile or Web App">Mobile or Web App</option>
            <option value="AI System">AI System</option>
            <option value="Automation">Automation</option>
            <option value="Emerging Technology">Emerging Technology</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="budgetRange">ESTIMATED BUDGET</label>

        <select
          id="budgetRange"
          name="budgetRange"
          defaultValue=""
          disabled={status === "submitting"}
        >
          <option value="" disabled>
            Select a range
          </option>

          <option value="Under $2,500">Under $2,500</option>
          <option value="$2,500 - $5,000">$2,500 - $5,000</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
          <option value="$25,000+">$25,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="projectDescription">
          TELL US ABOUT YOUR PROJECT
        </label>

        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={7}
          placeholder="What are you building? What problem are you trying to solve? What would success look like?"
          required
          disabled={status === "submitting"}
        />
      </div>

      {message && (
        <div
          className={
            status === "success"
              ? "form-message form-message-success"
              : "form-message form-message-error"
          }
          role="status"
        >
          {message}
        </div>
      )}

      <div className="form-bottom">
        <p>
          By submitting this form, you&apos;re starting a project conversation
          with Vertra Technologies.
        </p>

        <button
          type="submit"
          className="project-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>SUBMITTING...</>
          ) : (
            <>
              SUBMIT PROJECT
              <span>-&gt;</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}