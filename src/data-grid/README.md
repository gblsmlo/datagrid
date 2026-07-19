## DataGrid contract

DataGrid is a domain-neutral collection view. It owns grid semantics, roving
focus, keyboard navigation, sorting, filtering, resizing, pinning, selection,
pagination, virtualization, and opt-in editing primitives.

The consumer owns its column language, data, authorization, navigation, remote
state, mutations, and persistence. Toolbar controls are independent components;
their composition does not transfer application state or business behavior into
the package.

Horizontal drag scrolling starts after an 8px threshold and ignores interactive
elements, column headers, resize handles, and editable controls. Pointer capture
is released on pointer up, cancellation, and lost capture.
