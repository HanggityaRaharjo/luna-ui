export const toggle = {
  ".toggle": {
    "flex-shrink": "0",
    "--tglbg": "white",
    "--handleoffset": "1.5rem",
    "--handleoffsetcalculator": "calc(var(--handleoffset) * -1)",
    "--togglehandleborder": "0 0",
    "--togglebordercolor": "rgb(var(--default))",
    "--dottogglecolor": "rgb(var(--default))",
    height: "1.5rem",
    width: "3rem",
    cursor: "pointer",
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    "border-width": "1px",
    "border-color": "var(--togglebordercolor)",
    "background-color": "var(--dottogglecolor)",
    "transition-duration": "0.3s",
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "border-radius": "1.9rem",
    "box-shadow":
      "var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset, var(--togglehandleborder)",
  },
  '.toggle:checked, .toggle[checked="true"], .toggle[aria-checked="true"]': {
    "--handleoffsetcalculator": "1.5rem",
    "--tw-border-opacity": "1",
    "--tw-bg-opacity": "1",
  },
  '.toggle-primary:checked, .toggle-primary[checked="true"], .toggle-primary[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--primary))",
      "--togglebordercolor": "rgb(var(--primary))",
    },
  '.toggle-secondary:checked, .toggle-secondary[checked="true"], .toggle-secondary[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--secondary))",
      "--togglebordercolor": "rgb(var(--secondary))",
    },
  '.toggle-accent:checked, .toggle-accent[checked="true"], .toggle-accent[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--accent))",
      "--togglebordercolor": "rgb(var(--accent))",
    },
  '.toggle-info:checked, .toggle-info[checked="true"], .toggle-info[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--info))",
      "--togglebordercolor": "rgb(var(--info))",
    },
  '.toggle-success:checked, .toggle-success[checked="true"], .toggle-success[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--success))",
      "--togglebordercolor": "rgb(var(--success))",
    },
  '.toggle-warning:checked, .toggle-warning[checked="true"], .toggle-warning[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--warning))",
      "--togglebordercolor": "rgb(var(--warning))",
    },
  '.toggle-error:checked, .toggle-error[checked="true"], .toggle-error[aria-checked="true"]':
    {
      "--tglbg": "white",
      "--dottogglecolor": "rgb(var(--error))",
      "--togglebordercolor": "rgb(var(--error))",
    },
};
