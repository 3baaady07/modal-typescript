const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const e = event as MouseEvent;
    const button = e.relatedTarget as HTMLButtonElement;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever') as string
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input') as HTMLInputElement

    modalTitle!.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}