export const progress = {
  "progress::-webkit-progress-bar": {
    "background-color": "#d7dce1", // Ganti dengan warna fill yang Anda inginkan
  },
  "progress.progress": {
    "background-color": "red",
    "min-width": "100px",
    height: "8px",
    "border-radius": "100px",
    overflow: "hidden",
  },
  "progress.progress::-webkit-progress-value": {
    "--pgbg": "var(--default)",
    "background-color": "rgba(var(--pgbg), 1)",
    "border-radius": "100px",
  },
  "progress.progress-primary::-webkit-progress-value": {
    "--pgbg": "var(--primary)",
  },
  "progress.progress-secondary::-webkit-progress-value": {
    "--pgbg": "var(--secondary)",
  },
  "progress.progress-accent::-webkit-progress-value": {
    "--pgbg": "var(--accent)",
  },
  "progress.progress-success::-webkit-progress-value": {
    "--pgbg": "var(--success)",
  },
  "progress.progress-info::-webkit-progress-value": {
    "--pgbg": "var(--info)",
  },
  "progress.progress-warning::-webkit-progress-value": {
    "--pgbg": "var(--warning)",
  },
  "progress.progress-error::-webkit-progress-value": {
    "--pgbg": "var(--error)",
  },
};
