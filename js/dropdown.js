function clear(){
    document.querySelectorAll('.dropdown__btn').forEach((el) => {
        el.classList.remove('dropdown__btn_active');
    })
    document.querySelectorAll('.dropdown__menu').forEach((el) => {
        el.classList.remove('dropdown__menu_active');
    })
}
function handleOutClick(e){
    !e.target.closest('.dropdown') ? clear() : null;
}
window.addEventListener('click', handleOutClick);
function handleDropdown(e){
    let dropdown = e.target.closest('.dropdown');
    let dropdown_btn = dropdown.querySelector('.dropdown__btn');
    let dropdown_menu = dropdown.querySelector('.dropdown__menu');
    if (!dropdown_btn.classList.contains('dropdown__btn_active')) {
        document.querySelectorAll('.dropdown__btn').forEach((el) => {
            el.classList.remove('dropdown__btn_active');
        })
        document.querySelectorAll('.dropdown__menu').forEach((el) => {
            el.classList.remove('dropdown__menu_active');
        })
    } 
    if(e.target.closest('.dropdown__item')){
        dropdown_btn.textContent = e.target.textContent;
        if(e.target.classList.contains('select')){
            e.target.querySelector('.select__input').value = e.target.textContent.trim();
        }
        document.querySelectorAll('.dropdown__btn').forEach((el) => {
            el.classList.remove('dropdown__btn_active');
        })
        document.querySelectorAll('.dropdown__menu').forEach((el) => {
            el.classList.remove('dropdown__menu_active');
        })
    }
    dropdown_btn.classList.toggle('dropdown__btn_active');
    dropdown_menu.classList.toggle('dropdown__menu_active');
    
}