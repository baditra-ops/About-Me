import React from 'react';

export function GithubIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.593 5.86 5.86 0 0 0 3.826-.74 5.92 5.92 0 0 0 2.215-2.613l2.844-5.945a1.37 1.37 0 0 0-.585-1.826 1.385 1.385 0 0 0-1.85.586l-2.793 5.839a3.176 3.176 0 0 1-1.187 1.398 3.14 3.14 0 0 1-2.052.397 3.195 3.195 0 0 1-2.587-1.929 3.03 3.03 0 0 1-.188-.546 2.97 2.97 0 0 1-.034-1.269 2.827 2.827 0 0 1 .65-1.13l3.82-4.09 4.97-5.328a1.378 1.378 0 0 0 .285-1.464A1.37 1.37 0 0 0 13.483 0zm-2.88 7.218a1.372 1.372 0 0 0-.97.402l-4.137 4.137a1.375 1.375 0 1 0 1.944 1.945l4.137-4.138a1.372 1.372 0 0 0-.974-2.346z" />
    </svg>
  );
}

export function CodeforcesIcon({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="1.5" y="9" width="5" height="12" rx="1.5" fill="#4B8BF5" />
      <rect x="9.5" y="3" width="5" height="18" rx="1.5" fill="#FFC107" />
      <rect x="17.5" y="6" width="5" height="15" rx="1.5" fill="#E91E63" />
    </svg>
  );
}
