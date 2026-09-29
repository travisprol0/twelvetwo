export function Flow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span className="font-mono text-[12px] tracking-[0.16em] text-ink uppercase">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <>
              <span aria-hidden="true" className="mx-3 hidden text-faint sm:inline">
                →
              </span>
              <span aria-hidden="true" className="my-2 block pl-1 text-faint sm:hidden">
                ↓
              </span>
            </>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
